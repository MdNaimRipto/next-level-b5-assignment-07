import PositionAnimation from "@/components/animations/PositionAnimation";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

const MoreContactOptions = () => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/naimur-rahman2001",
      delay: 1.2,
    },
    {
      icon: FaGithub,
      link: "https://github.com/MdNaimRipto",
      delay: 1.6,
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/mdnaimur.rahman.50309",
      delay: 2,
    },
  ];

  return (
    <div className="flex flex-col gap-3 md:gap-8 items-center mt-16 md:mt-0">
      <div className="flex flex-col gap-4">
        <PositionAnimation position="y" initial={20} animate={0} delay={0}>
          <h4 className="md:text-3xl font-light">Send Email</h4>
        </PositionAnimation>
        <PositionAnimation position="y" initial={20} animate={0} delay={0.4}>
          <Link
            className="text-black md:text-3xl italic"
            href="mailto:mdnaimurrahman681@gmail.com"
          >
            mdnaimurrahman681@gmail.com
          </Link>
        </PositionAnimation>
      </div>
      <PositionAnimation position="y" initial={20} animate={0} delay={0.8}>
        <span className="text-center text-xl">Or</span>
      </PositionAnimation>

      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((link, i) => (
          <PositionAnimation
            key={i}
            position="x"
            initial={20}
            animate={0}
            delay={link.delay}
          >
            <Link href={link.link}>
              <link.icon className="text-2xl md:text-4xl" />
            </Link>
          </PositionAnimation>
        ))}
      </div>
    </div>
  );
};

export default MoreContactOptions;
