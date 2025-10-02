import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-2xl shadow-inset-black hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">
      {/* Thumbnail */}
      <div className="w-full h-[250px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-5">
        {/* Category & Date */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span className="px-3 py-1 rounded-full bg-black/5 text-black/70 font-medium">
            {blog.category}
          </span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        {/* Title */}
        <h6 className="text-xl text-black font-semibold leading-snug line-clamp-2 mb-3">
          {blog.title.length >= 30
            ? blog.title.slice(0, 29) + "..."
            : blog.title}
        </h6>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {blog.excerpt}
        </p>

        {/* Author + Read More */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">✍️ MD Naimur Rahman</p>
          <Link
            href={`/blogs/${blog.id}`}
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
