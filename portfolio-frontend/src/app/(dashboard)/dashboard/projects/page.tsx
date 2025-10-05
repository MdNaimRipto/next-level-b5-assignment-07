"use client";
import { deleteProject, getAllProjects } from "@/actions/projects";
import { AddProjectModal } from "@/components/dashboard/projects/AddProjectModal";
import { EditProjectModal } from "@/components/dashboard/projects/EditProjectModal";
import TopHeader from "@/components/dashboard/TopHeader";
import { IProjects } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DashboardProjects = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editProject, setEditProject] = useState<IProjects | null>(null);

  const [projects, setProjects] = useState<IProjects[] | []>([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await getAllProjects();
      setProjects(res.data);
    };

    getProjects();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <TopHeader
        addButton={
          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 hover:cursor-pointer"
          >
            Add Project
          </button>
        }
      />

      {/* Project Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Thumbnail
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Stack
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Links
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-3">
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt="Project image"
                      className="w-full h-full rounded-xl object-cover"
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">
                  {project.title}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {project.stack}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  <div className="flex items-center gap-3 h-full underline text-black font-medium">
                    <Link href={project.liveLink}>Live Link</Link>{" "}
                    <Link href={project.repoLink}>Repo Link</Link>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setIsEditOpen(true);
                        setEditProject(project);
                      }}
                      className="px-3 py-1 rounded-md bg-black text-white text-sm hover:cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      disabled={isLoading ? true : false}
                      onClick={async () => {
                        try {
                          setIsLoading(true);
                          const res = await deleteProject({
                            projectId: String(project._id),
                          });
                          if (res.success) {
                            toast.success(res.message);
                          }
                        } catch (error) {
                          console.log(error);
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                      className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600 hover:cursor-pointer"
                    >
                      {isLoading ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AddProjectModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
      <EditProjectModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        project={editProject}
      />
    </div>
  );
};

export default DashboardProjects;
