import { blogs } from "@/components/blogs/BlogsMain";
import Image from "next/image";
import React from "react";

interface IBlog {
  id: number;
  title: string;
  excerpt: string;
  description: string; // ✅ full blog content
  image: string;
  date: string;
  category: string;
  slug: string;
}

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const blog = blogs.find((id) => String(id.id) === String(blogId)) as IBlog;

  return (
    <div className="max-w-5xl mt-[100px] pb-[100px] mx-auto bg-white/80 backdrop-blur-2xl shadow-inset-black rounded-3xl min-h-screen">
      {/* Header Image */}
      <div className="w-full h-[350px] md:h-[400px] overflow-hidden rounded-t-3xl shadow-inset-black">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1000}
          height={600}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      <div className="mx-12">
        {/* Meta Info */}
        <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 mt-6">
          <span className="px-3 py-1 rounded-full bg-black/5 text-black/70 font-medium">
            {blog.category}
          </span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-4">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-gray-600 mt-4">{blog.excerpt}</p>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Full Description */}
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          maxime tenetur suscipit sunt tempora aliquam? Corrupti illum quia
          dolorum cupiditate quasi. Exercitationem veniam itaque nulla modi
          dolores facere suscipit vitae minima ipsum asperiores nihil velit
          quaerat cumque fuga nam, porro beatae facilis? Odit impedit odio
          nostrum! Ipsam saepe consequuntur eaque.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          maxime tenetur suscipit sunt tempora aliquam? Corrupti illum quia
          dolorum cupiditate quasi. Exercitationem veniam itaque nulla modi
          dolores facere suscipit vitae minima ipsum asperiores nihil velit
          quaerat cumque fuga nam, porro beatae facilis? Odit impedit odio
          nostrum! Ipsam saepe consequuntur eaque.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          maxime tenetur suscipit sunt tempora aliquam? Corrupti illum quia
          dolorum cupiditate quasi. Exercitationem veniam itaque nulla modi
          dolores facere suscipit vitae minima ipsum asperiores nihil velit
          quaerat cumque fuga nam, porro beatae facilis? Odit impedit odio
          nostrum! Ipsam saepe consequuntur eaque.
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            ✍️ Written by MD Naimur Rahman
          </p>
          <p className="text-sm text-primary font-medium">
            {new Date(blog.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
