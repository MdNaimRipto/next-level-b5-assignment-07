import React from "react";
import RotatingTitle from "./RotatingTitle";
import OpacityTransition from "@/components/animations/OpacityTransition";
import GlassEffectButton from "@/components/buttons/GlassEffectButton";
import RotatingTextBlackButton from "@/components/buttons/RotatingTextBlackButton";
import Link from "next/link";
import LearnMoreLink from "./LearnMoreLink";

const Banner = () => {
  return (
    <div className="relative h-screen z-40 flex items-center justify-center flex-col gap-6">
      <div className="flex flex-col items-center justify-center relative z-40 h-full">
        <OpacityTransition>
          <h6 className={`text-black text-center text-sm md:text-2xl mb-4`}>
            Welcome
          </h6>
        </OpacityTransition>
        <h2
          className={`text-center text-xl leading-[48px] md:text-[55px] md:leading-[70px] mb-[20px]`}
        >
          <OpacityTransition delay={0.2}>
            <span className={`text-primary/90 font-semibold`}>{`I'm`}</span>
          </OpacityTransition>{" "}
          <OpacityTransition delay={0.4}>
            <span className={`text-primary font-normal`}>MD Naimur Rahman</span>
          </OpacityTransition>
          <br />
          <OpacityTransition delay={0.6}>
            <RotatingTitle />
          </OpacityTransition>
        </h2>
        <OpacityTransition delay={0.8}>
          <p
            className={`text-primary text-center w-[96%] md:w-[680px] text-xs leading-[14.4px] md:text-xl md:leading-[34px] mb-[60px]`}
          >
            {`Full-stack Developer specializing in MERN Stack. I build modern, scalable web apps with clean code and great UI/UX.`}
          </p>
        </OpacityTransition>
        <OpacityTransition delay={1}>
          <div className="flex flex-col md:flex-row items-center gap-4 scale-90 md:scale-100">
            <LearnMoreLink />
            <RotatingTextBlackButton title="Download My Resume" />
          </div>
        </OpacityTransition>
      </div>
    </div>
  );
};

export default Banner;
