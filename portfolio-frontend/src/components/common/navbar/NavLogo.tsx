import { smoothScrollTo } from "@/utils/smoothScroll";
import Link from "next/link";

// Smooth scroll function

const NavLogo = () => {
  return (
    <>
      {/* Desktop Logo */}
      <Link
        onClick={(e) => {
          e.preventDefault(); // prevent default anchor jump
          smoothScrollTo(0, 800); // smooth scroll to top
        }}
        href="/"
        className="hidden md:block md:w-48 xl:w-60"
        aria-label="Go to homepage"
      >
        <span className="text-5xl cursor-pointer">{"<Naimur/>"}</span>
      </Link>

      {/* Mobile Logo */}
      <Link
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo(0, 1200);
        }}
        href="/"
        className="w-20 md:hidden"
        aria-label="Go to homepage"
      >
        <span className="text-4xl cursor-pointer">{"<N/>"}</span>
      </Link>
    </>
  );
};

export default NavLogo;
