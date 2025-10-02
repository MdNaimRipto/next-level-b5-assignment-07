/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { blogs } from "@/components/blogs/BlogsMain";
import { AddBlogModal } from "@/components/dashboard/blogs/AddBlogModal";
import { EditBlogModal } from "@/components/dashboard/blogs/EditBlogModal";
import TopHeader from "@/components/dashboard/TopHeader";
import Image from "next/image";
import { useState } from "react";

interface IBlog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

const DashboardBlogs = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editBlog] = useState<any>(null);

  const handleAddBlog = (data: any) => {
    console.log("New Blog:", data);
  };

  const handleUpdateBlog = (data: any) => {
    console.log("Updated Blog:", data);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <TopHeader
        addButton={
          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 hover:cursor-pointer"
          >
            Add Blog
          </button>
        }
      />

      {/* Blog Table */}
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
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog: IBlog, index) => (
              <tr
                key={blog.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-3">
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt="blog image"
                      className="w-full h-full rounded-xl object-cover"
                      width={200}
                      height={200}
                    />
                  </div>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">
                  {blog.title}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {blog.category}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">{blog.date}</td>
                <td className="px-6 py-3 text-sm text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsEditOpen(true)}
                      className="px-3 py-1 rounded-md bg-black text-white text-sm hover:cursor-pointer"
                    >
                      Edit
                    </button>
                    <button className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600 hover:cursor-pointer">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AddBlogModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmitBlog={handleAddBlog}
      />
      <EditBlogModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        blog={editBlog}
        onUpdateBlog={handleUpdateBlog}
      />
    </div>
  );
};

export default DashboardBlogs;
