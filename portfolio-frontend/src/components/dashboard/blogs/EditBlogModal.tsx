"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../../modals/ModalWrapper";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(2, "Category is required"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  date: z.string().min(1, "Date is required"),
});

type BlogFormData = z.infer<typeof blogSchema>;

export const EditBlogModal = ({
  isOpen,
  onClose,
  blog,
  onUpdateBlog,
}: {
  isOpen: boolean;
  onClose: () => void;
  blog: BlogFormData | null;
  onUpdateBlog: (data: BlogFormData) => void;
}) => {
  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: blog || {
      title: "",
      category: "",
      excerpt: "",
      date: new Date().toISOString().slice(0, 10),
    },
  });

  const handleSubmit = (data: BlogFormData) => {
    onUpdateBlog(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
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

        <input
          type="date"
          {...form.register("date")}
          className="border rounded-md p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
    </Modal>
  );
};
