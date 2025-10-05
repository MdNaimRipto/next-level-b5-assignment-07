import { smoothScrollTo, smoothScrollToHash } from "@/utils/smoothScroll";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavMenuItems = ({
  scrolled,
  isOpen,
}: {
  scrolled: boolean;
  isOpen: boolean;
}) => {
  const router = useRouter();
  const navItems = [
    { name: "About", link: "#about", opacityDelay: ".3s" },
    { name: "Projects", link: "#projects", opacityDelay: ".4s" },
    { name: "Experience", link: "#experience", opacityDelay: ".5s" },
    { name: "Skills", link: "#skills", opacityDelay: ".6s" },
    { name: "Contact", link: "#contact", opacityDelay: ".7s" },
    // { name: "Blogs", link: "/blogs", opacityDelay: ".8s" },
  ];

  const handleNavClick = (menu: { link: string }) => {
    if (window.location.pathname === "/") {
      // already home → smooth scroll
      smoothScrollToHash(menu.link, 0, 800);
    } else {
      // not home → go home with hash
      router.push("/" + menu.link);
    }
  };

  return (
    <ul
      className={`flex h-dvh xl:h-[40px] xl:leading-[40px] flex-col xl:flex-row absolute xl:static w-4/5 md:w-2/5 xl:w-full top-0 pt-8 xl:pt-0 gap-8 px-8 z-50 ${
        scrolled
          ? "bg-white xl:bg-transparent"
          : "bg-white shadow-md rounded-xl"
      } ${isOpen ? "left-0" : "-left-full"} duration-500`}
    >
      <div className="flex items-center justify-center xl:hidden">
        <Link href="/" aria-label="Go to homepage">
          <span className="text-4xl cursor-pointer">{"<Naimur/>"}</span>
        </Link>
      </div>
      <Link
        href="/"
        onClick={() => {
          if (window.location.pathname === "/") {
            smoothScrollTo(0, 800);
          } else {
            router.push("/");
          }
        }}
      >
        <li
          className={`${
            isOpen
              ? `opacity-100 duration-700 mt-0`
              : "opacity-0 xl:opacity-100 mt-3 xl:mt-0"
          } cursor-pointer focus: select-none`}
          style={{
            transitionDelay: isOpen ? ".2s" : "0s",
          }}
        >
          Home
        </li>
      </Link>
      {navItems.map((menu, index) => (
        <li
          key={index}
          className={`${
            isOpen
              ? `opacity-100 duration-700 mt-0`
              : "opacity-0 xl:opacity-100 mt-3 xl:mt-0"
          } cursor-pointer focus: select-none`}
          style={{
            transitionDelay: isOpen ? menu.opacityDelay : "0s",
          }}
          // onClick={(e) => {
          //   e.preventDefault(); // prevent default anchor jump
          //   smoothScrollToHash(menu.link, 0, 800); // smooth scroll to top
          // }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(menu);
          }}
        >
          {menu.name}
        </li>
      ))}
      <Link href="/blogs">
        <li
          className={`${
            isOpen
              ? `opacity-100 duration-700 mt-0`
              : "opacity-0 xl:opacity-100 mt-3 xl:mt-0"
          } cursor-pointer focus: select-none`}
          style={{
            transitionDelay: isOpen ? ".8s" : "0s",
          }}
        >
          Blogs
        </li>
      </Link>
    </ul>
  );
};

export default NavMenuItems;
