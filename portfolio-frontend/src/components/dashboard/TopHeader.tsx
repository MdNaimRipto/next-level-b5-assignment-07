import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

const TopHeader = ({ addButton }: { addButton: ReactElement }) => {
  const pathName = usePathname();
  const paths = [
    {
      link: "/dashboard/blogs",
      title: "Blogs",
    },
    {
      link: "/dashboard/projects",
      title: "Projects",
    },
  ];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {paths.map((path, i) => (
          <Link
            key={i}
            href={path.link}
            className={pathName === path.link ? "underline font-semibold" : ""}
          >
            {path.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {addButton}
        <button
          onClick={() => console.log("Logout")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-black/90 hover:cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
