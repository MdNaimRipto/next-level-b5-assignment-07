"use client";
import { useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import RotatingTextButton from "../../buttons/RotatingTextButton";
import NavMenuItems from "./NavMenuItems";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent body scroll on mobile
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Detect scroll for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } duration-300`}
    >
      {/* Desktop Navbar */}
      <div className={`container mx-auto transition-colors duration-500`}>
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          <div className="xl:w-1/3 h-full flex items-center justify-start">
            <NavLogo />
          </div>

          <div className="hidden xl:block">
            <NavMenuItems scrolled={scrolled} isOpen={isOpen} />
          </div>

          <div className="h-full flex items-center justify-end scale-90 gap-4 xl:w-1/3">
            <RotatingTextButton title="Let's Talk" />
            <HamburgerMenu isNavOpen={isOpen} setIsNavOpen={setOpen} />
          </div>
        </div>
        <div className="block xl:hidden">
          <NavMenuItems scrolled={scrolled} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
