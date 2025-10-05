import BlogBanner from "@/components/blogs/Banner";
import OptionsTab from "@/components/blogs/OptionsTab";
import BlogCard from "./BlogCard";
import PositionAnimation from "../animations/PositionAnimation";
import { apiConfig } from "@/configs/apiConfig";
import { IBlogs } from "@/types/blogs";

const BlogsMain = async () => {
  const res = await fetch(apiConfig.baseUrl + apiConfig.blogs.getAll);
  const result = await res.json();
  const blogs = result?.data as IBlogs[];

  return (
    <div className="mt-[100px] container mx-auto px-4 md:px-16 lg:px-4">
      <BlogBanner />
      <OptionsTab />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-12 xl:px-10 2xl:px-12">
        {blogs.map((blog, key) => (
          <PositionAnimation
            key={blog._id}
            position="y"
            initial={20}
            animate={0}
            delay={key * 0.1}
          >
            <BlogCard blog={blog} />
          </PositionAnimation>
        ))}
      </div>
    </div>
  );
};

export default BlogsMain;
