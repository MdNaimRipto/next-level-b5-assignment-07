"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../modals/ModalWrapper";
import { useState } from "react";
import TextEditor from "./TextEditor";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(2, "Category is required"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  description: z.string(),
});

type BlogFormData = z.infer<typeof blogSchema>;

export const AddBlogModal = ({
  isOpen,
  onClose,
  onSubmitBlog,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmitBlog: (data: BlogFormData) => void;
}) => {
  const [content, setContent] = useState("");

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      category: "",
      excerpt: "",
      description: "",
    },
  });

  const handleSubmit = (data: BlogFormData) => {
    onSubmitBlog({ ...data, description: JSON.stringify(content) });
    form.reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Title"
          {...form.register("title")}
          className="border rounded-md p-2"
        />
        {form.formState.errors.title && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.title.message}
          </p>
        )}

        <input
          type="text"
          placeholder="Category"
          {...form.register("category")}
          className="border rounded-md p-2"
        />
        {form.formState.errors.category && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.category.message}
          </p>
        )}

        <textarea
          placeholder="Excerpt"
          {...form.register("excerpt")}
          className="border rounded-md p-2"
        />
        {form.formState.errors.excerpt && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.excerpt.message}
          </p>
        )}

        <TextEditor setContent={setContent} />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded-md hover:bg-black/90"
        >
          Add Blog
        </button>
      </form>
    </Modal>
  );
};
