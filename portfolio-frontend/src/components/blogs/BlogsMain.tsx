import BlogBanner from "@/components/blogs/Banner";
import OptionsTab from "@/components/blogs/OptionsTab";
import BlogCard from "./BlogCard";
import PositionAnimation from "../animations/PositionAnimation";

export const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to set up your first Next.js 15 project with App Router, server actions, and modern features.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-25",
    category: "Web Development",
    slug: "getting-started-nextjs-15",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game Changer",
    excerpt:
      "Discover why developers love Tailwind CSS for building modern, responsive UIs with speed and efficiency.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-20",
    category: "Frontend",
    slug: "why-tailwind-css-game-changer",
  },
  {
    id: 3,
    title: "Optimizing MongoDB Queries",
    excerpt:
      "Tips and tricks to write efficient MongoDB queries and improve performance for large-scale apps.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-15",
    category: "Backend",
    slug: "optimizing-mongodb-queries",
  },
  {
    id: 4,
    title: "Top 5 VS Code Extensions for Developers",
    excerpt:
      "Boost your productivity with these must-have VS Code extensions for web and app developers.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-10",
    category: "Tools",
    slug: "top-5-vscode-extensions",
  },
  {
    id: 5,
    title: "Mastering GitHub Actions",
    excerpt:
      "A beginner-friendly guide to setting up CI/CD pipelines with GitHub Actions for your projects.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-05",
    category: "DevOps",
    slug: "mastering-github-actions",
  },
  {
    id: 6,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to set up your first Next.js 15 project with App Router, server actions, and modern features.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-25",
    category: "Web Development",
    slug: "getting-started-nextjs-15",
  },
  {
    id: 7,
    title: "Why Tailwind CSS is a Game Changer",
    excerpt:
      "Discover why developers love Tailwind CSS for building modern, responsive UIs with speed and efficiency.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-20",
    category: "Frontend",
    slug: "why-tailwind-css-game-changer",
  },
  {
    id: 8,
    title: "Optimizing MongoDB Queries",
    excerpt:
      "Tips and tricks to write efficient MongoDB queries and improve performance for large-scale apps.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-15",
    category: "Backend",
    slug: "optimizing-mongodb-queries",
  },
  {
    id: 9,
    title: "Top 5 VS Code Extensions for Developers",
    excerpt:
      "Boost your productivity with these must-have VS Code extensions for web and app developers.",
    image: "https://bloggingfordevs.com/images/tech-blog-rankings-preview.png",
    date: "2025-09-10",
    category: "Tools",
    slug: "top-5-vscode-extensions",
  },
];

const BlogsMain = () => {
  return (
    <div className="mt-[100px] container mx-auto px-4 md:px-16 lg:px-4">
      <BlogBanner />
      <OptionsTab />
      <div className="grid grid-cols-3 gap-12 px-12">
        {blogs.map((blog) => (
          <PositionAnimation
            key={blog.id}
            position="y"
            initial={20}
            animate={0}
            delay={blog.id * 0.1}
          >
            <BlogCard blog={blog} />
          </PositionAnimation>
        ))}
      </div>
    </div>
  );
};

export default BlogsMain;
