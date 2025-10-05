"use client";
import GlassEffectButton from "@/components/buttons/GlassEffectButton";
import { smoothScrollToHash } from "@/utils/smoothScroll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LearnMoreLink = () => {
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
    <Link href="/#about" onClick={() => handleNavClick({ link: "#about" })}>
      <GlassEffectButton
        title="Learn More About Me"
        // onClick={() => scrollToAbout()}
      />
    </Link>
  );
};

export default LearnMoreLink;
