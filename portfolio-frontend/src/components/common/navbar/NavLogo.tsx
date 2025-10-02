"use client";
import { smoothScrollTo } from "@/utils/smoothScroll";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Smooth scroll function

const NavLogo = () => {
  const router = useRouter();
  const handleNavClick = () => {
    if (window.location.pathname === "/") {
      smoothScrollTo(0, 800);
    } else {
      router.push("/");
    }
  };

  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        handleNavClick();
      }}
      href="/"
      className="md:w-48 xl:w-60"
      aria-label="Go to homepage"
    >
      <span className="text-4xl cursor-pointer md:hidden">{"<N/>"}</span>
      <span className="text-5xl cursor-pointer hidden md:block">
        {"<Naimur/>"}
      </span>
    </Link>
  );
};

export default NavLogo;
