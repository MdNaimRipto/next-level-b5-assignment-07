import { IBlogs } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: IBlogs }) => {
  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-2xl shadow-inset-black hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">
      {/* Thumbnail */}
      <div className="w-full h-[250px] overflow-hidden">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover hover:scale-110 transition-transform duration- object-top-left"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-5">
        {/* Category & Date */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span className="px-3 py-1 rounded-full bg-black/5 text-black/70 font-medium">
            {blog.tag}
          </span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>

        {/* Title */}
        <h6 className="text-xl text-black font-semibold leading-snug line-clamp-2 mb-3">
          {blog.title.length >= 30
            ? blog.title.slice(0, 29) + "..."
            : blog.title}
        </h6>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {blog.subTitle.length >= 90
            ? blog.subTitle.slice(0, 89) + "..."
            : blog.subTitle}
        </p>

        {/* Author + Read More */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">✍️ MD Naimur Rahman</p>
          <Link
            href={`/blogs/${blog._id}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
