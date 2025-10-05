import { logout } from "@/actions/auth";
import { useUserContext } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactElement, useState } from "react";
import { toast } from "sonner";

const TopHeader = ({ addButton }: { addButton: ReactElement }) => {
  const { setUser } = useUserContext();
  const router = useRouter();
  const pathName = usePathname();

  const [isLoading, setIsLoading] = useState(false);

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
          onClick={async () => {
            setIsLoading(true);
            await logout();
            toast.success("Successfully Logged out");
            setUser(null);
            router.push("/");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-black/90 hover:cursor-pointer"
        >
          {isLoading ? "Logging Out..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
