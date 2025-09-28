"use client";
import React from "react";
import RotatingTitle from "./RotatingTitle";
import OpacityTransition from "@/components/animations/OpacityTransition";
import { Inter } from "next/font/google";
import GlassEffectButton from "@/components/buttons/GlassEffectButton";
import RotatingTextButton from "@/components/buttons/RotatingTextButton";

const font = Inter({});

const Banner = () => {
  return (
    <div className="relative h-screen z-40 flex items-center justify-center flex-col gap-6">
      <div className="flex flex-col items-center justify-center relative z-40 h-full">
        <OpacityTransition>
          <h6
            className={`text-gold ${font.className} text-center text-2xl mb-4`}
          >
            Welcome
          </h6>
        </OpacityTransition>
        <h2
          className={`text-center text-[40px] leading-[48px] md:text-[55px] md:leading-[70px] mb-[20px]`}
        >
          <OpacityTransition delay={0.2}>
            <span className={`text-primary/90 font-semibold ${font.className}`}>
              {`I'm`}
            </span>
          </OpacityTransition>{" "}
          <OpacityTransition delay={0.4}>
            <span className={`text-primary font-normal ${font.className}`}>
              MD Naimur Rahman
            </span>
          </OpacityTransition>
          <br />
          <OpacityTransition delay={0.6}>
            <RotatingTitle />
          </OpacityTransition>
        </h2>
        <OpacityTransition delay={0.8}>
          <p
            className={`text-primary ${font.className} text-center w-[96%] md:w-[680px] text-xs leading-[14.4px] md:text-xl md:leading-[34px] mb-[60px]`}
          >
            {`Full-stack Developer specializing in MERN Stack. I build modern, scalable web apps with clean code and great UI/UX.`}
          </p>
        </OpacityTransition>
        <OpacityTransition delay={1}>
          <div className="flex items-center gap-4 scale-75 md:scale-100">
            <GlassEffectButton
              title="Learn More About Me"
              // onClick={() => scrollToAbout()}
            />
            <RotatingTextButton
              title="Download My Resume"
              style={{
                backgroundColor: "#1a1a1a !important",
                color: "#fff",
              }}
            />
          </div>
        </OpacityTransition>
      </div>
    </div>
  );
};

export default Banner;
