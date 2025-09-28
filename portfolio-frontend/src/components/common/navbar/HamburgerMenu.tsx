import React from "react";

const HamburgerMenu = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const commonStyle = `w-6 h-[2px] rounded absolute left-0 duration-500 bg-black`;

  return (
    <button
      onClick={() => setIsNavOpen(!isNavOpen)}
      className="relative w-6 h-5 flex flex-col justify-between items-start overflow-hidden xl:hidden p-0.5 group"
    >
      <span
        className={`${commonStyle} top-0 ${
          isNavOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`${commonStyle} top-1/2 -translate-y-1/2 ${
          isNavOpen ? "rotate-45 top-1/2" : "rotate-0"
        }`}
      ></span>
      <span
        className={`${commonStyle} top-1/2 -translate-y-1/2 ${
          isNavOpen ? "-rotate-45 top-1/2" : "rotate-0"
        }`}
      ></span>
      <span
        className={`${commonStyle} bottom-0 ${
          isNavOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
