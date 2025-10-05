"use client";
import RotatingTextBlackButton from "@/components/buttons/RotatingTextBlackButton";
import { smoothScrollToHash } from "@/utils/smoothScroll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ViewProjectsLink = () => {
  const router = useRouter();
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
    <Link
      href="/#projects"
      onClick={() => handleNavClick({ link: "#projects" })}
    >
      <RotatingTextBlackButton
        title="View My Projects"
        // onClick={() => scrollToAbout()}
      />
    </Link>
  );
};

export default ViewProjectsLink;
