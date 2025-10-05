"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../../modals/ModalWrapper";
import { useState } from "react";
import ImageUpload from "@/components/ImageUpload";
import { toast } from "sonner";
import { IProjects } from "@/types/projects";
import { uploadProject } from "@/actions/projects";

const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  stack: z.string().min(10, "Excerpt must be at least 10 characters"),
  liveLink: z.string().min(2, "Category is required"),
  repoLink: z.string(),
  thumbnail: z.string(),
});

type projectFormData = z.infer<typeof projectSchema>;

export const AddProjectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<projectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      stack: "",
      liveLink: "",
      repoLink: "",
      thumbnail: "",
    },
  });

  const handleAddBlog = async (data: projectFormData) => {
    try {
      setIsLoading(true);
      const res = await uploadProject({ payload: data as IProjects });
      if (res.success) {
        form.reset();
        onClose();
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (data: projectFormData) => {
    handleAddBlog({ ...data, thumbnail: image });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="max-h-[600px] overflow-y-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Upload Project</h2>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
        >
          <ImageUpload image={image} setImage={setImage} />
          <input
            type="text"
            placeholder="Title"
            {...form.register("title")}
            className="border rounded-md p-2"
            required
          />
          {form.formState.errors.title && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.title.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Stack"
            {...form.register("stack")}
            className="border rounded-md p-2"
            required
          />
          {form.formState.errors.stack && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.stack.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Live Link"
            {...form.register("liveLink")}
            className="border rounded-md p-2"
            required
          />
          {form.formState.errors.liveLink && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.liveLink.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Repo Link"
            {...form.register("repoLink")}
            className="border rounded-md p-2"
            required
          />
          {form.formState.errors.repoLink && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.repoLink.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-black/90"
          >
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </Modal>
  );
};
