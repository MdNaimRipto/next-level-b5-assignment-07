import React from "react";
import Image from "next/image";
import banner from "@/assets/images/softnerve/softnerve-team.webp";
import Link from "next/link";
import SoftnerveLogo from "@/assets/svg/SoftnerveLogo";
import PositionAnimation from "@/components/animations/PositionAnimation";
import OpacityTransition from "@/components/animations/OpacityTransition";

const SoftnerveRelation = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 container md:h-dvh px-4 relative z-40"
      id="experience"
    >
      <div className="md:w-1/2 h-full flex flex-col items-center justify-center gap-10">
        <OpacityTransition>
          <SoftnerveLogo />
        </OpacityTransition>
        <div
          className={`text-black tracking-[0.452px] leading-8 text-xl text-right flex flex-col gap-4 font-normal`}
        >
          <PositionAnimation
            position="y"
            initial={20}
            animate={0}
            delay={0.1}
            className="font-normal"
          >
            I started my career at{" "}
            <Link
              href="http://150.241.245.222:3000"
              target="_blank"
              className="text-primary font-extrabold"
            >
              Softnerve
            </Link>{" "}
            Technologies as a Frontend Intern, where I built the foundation of
            my professional journey. After 6 months, I transitioned into a
            Full-time Fullstack Developer role.
          </PositionAnimation>{" "}
          <PositionAnimation
            position="y"
            initial={20}
            animate={0}
            delay={0.6}
            className={`text-gold`}
          >
            At{" "}
            <Link
              href="http://150.241.245.222:3000"
              target="_blank"
              className="text-primary font-extrabold"
            >
              Softnerve
            </Link>
            , I have been the lead and sole frontend developer, responsible for
            designing and maintaining our company portfolio and our flagship
            project{" "}
            <Link
              className="text-primary font-extrabold"
              href="https://healthbuddy.softnerve.com"
              target="_blank"
            >
              Healthbuddy
            </Link>{" "}
            – an AI-powered healthcare platform. Beyond frontend, I also
            contributed to the backend, building two microservices to support{" "}
            <Link
              className="text-primary font-extrabold"
              href="https://healthbuddy.softnerve.com"
              target="_blank"
            >
              Healthbuddy’s
            </Link>{" "}
            architecture.
          </PositionAnimation>{" "}
          <PositionAnimation position="y" initial={20} animate={0} delay={1.1}>
            Currently, I am driving the frontend development for our
            next-generation AI project – a multi-purpose agent platform capable
            of handling diverse tasks like healthcare assistance, travel
            guidance, and e-commerce support. This role has given me end-to-end
            ownership of frontend development while also expanding my experience
            with backend systems.
          </PositionAnimation>
        </div>
      </div>
      <PositionAnimation
        position="x"
        initial={20}
        animate={0}
        delay={0.1}
        className="md:w-[45%] h-[880px] overflow-hidden rounded-3xl shadow"
      >
        <Image
          src={banner}
          alt="WhatWeBelieve.png"
          className="w-full h-full object-cover"
        />
      </PositionAnimation>
    </div>
  );
};

export default SoftnerveRelation;
