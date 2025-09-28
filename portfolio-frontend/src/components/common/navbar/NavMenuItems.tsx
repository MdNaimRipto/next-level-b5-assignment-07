import Link from "next/link";

const NavMenuItems = ({
  scrolled,
  isOpen,
}: {
  scrolled: boolean;
  isOpen: boolean;
}) => {
  const navItems = [
    { name: "Home", link: "/", opacityDelay: ".2s" },
    { name: "About", link: "/#about", opacityDelay: ".3s" },
    { name: "Projects", link: "/#projects", opacityDelay: ".4s" },
    { name: "Experience", link: "/#experience", opacityDelay: ".5s" },
    { name: "Skills", link: "/#skills", opacityDelay: ".6s" },
    { name: "Contact", link: "/#contact", opacityDelay: ".7s" },
    { name: "Blogs", link: "/blogs", opacityDelay: ".8s" },
  ];

  return (
    <ul
      className={`flex h-dvh xl:h-[40px] xl:leading-[40px] flex-col xl:flex-row absolute xl:static w-4/5 md:w-2/5 xl:w-full top-0 pt-8 xl:pt-0 gap-8 px-8 z-50 ${
        scrolled ? "bg-transparent" : "bg-white shadow-md rounded-xl"
      } ${isOpen ? "left-0" : "-left-full"} duration-500`}
    >
      <div className="flex items-center justify-center xl:hidden">
        <Link href="/" aria-label="Go to Shathi Paul - Web Developer Homepage">
          <span className="text-4xl">{"<Naimur/>"}</span>
        </Link>
      </div>
      {navItems.map((menu, index) => (
        <Link key={index} href={menu.link}>
          <li
            className={` ${
              isOpen
                ? `opacity-100 duration-700 mt-0`
                : "opacity-0 xl:opacity-100 mt-3 xl:mt-0"
            }`}
            style={{
              transitionDelay: isOpen ? menu.opacityDelay : "0s",
            }}
          >
            {menu.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenuItems;
