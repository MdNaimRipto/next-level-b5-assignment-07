import React from "react";
import htmlLogo from "@/assets/images/skills/1.svg";
import cssLogo from "@/assets/images/skills/2.svg";
import jsLogo from "@/assets/images/skills/3.svg";
import tsLogo from "@/assets/images/skills/4.svg";
import reactLogo from "@/assets/images/skills/5.svg";
import nextLogo from "@/assets/images/skills/6.svg";
import tailwindLogo from "@/assets/images/skills/7.svg";
import nodeLogo from "@/assets/images/skills/8.svg";
import mongoLogo from "@/assets/images/skills/9.svg";
import postLogo from "@/assets/images/skills/13.svg";
import sqlLogo from "@/assets/images/skills/10.svg";
import prismaLogo from "@/assets/images/skills/11.svg";
import dockerLogo from "@/assets/images/skills/12.svg";
import Image from "next/image";
import PositionAnimation from "@/components/animations/PositionAnimation";
import ProgressBar from "./ProgressBar";
import DynamicSwiper from "@/components/swiper/DynamicSwiper";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      image: htmlLogo,
      percent: 90,
    },
    {
      title: "CSS",
      image: cssLogo,
      percent: 90,
    },
    {
      title: "JavaScript",
      image: jsLogo,
      percent: 85,
    },
    {
      title: "TypeScript",
      image: tsLogo,
      percent: 86,
    },
    {
      title: "React.js",
      image: reactLogo,
      percent: 86,
    },
    {
      title: "Next.js",
      image: nextLogo,
      percent: 88,
    },
    {
      title: "Tailwind CSS",
      image: tailwindLogo,
      percent: 88,
    },
    {
      title: "Node.js",
      image: nodeLogo,
      percent: 85,
    },
    {
      title: "MongoDB",
      image: mongoLogo,
      percent: 86,
    },
    {
      title: "Postgres",
      image: postLogo,
      percent: 60,
    },
    {
      title: "SQL",
      image: sqlLogo,
      percent: 60,
    },
    {
      title: "Prisma",
      image: prismaLogo,
      percent: 60,
    },
    {
      title: "Docker",
      image: dockerLogo,
      percent: 60,
    },
  ];

  return (
    // <div
    //   className="min-h-dvh flex flex-col items-center justify-center my-20"
    //   id="skills"
    // >
    //   <div className="flex flex-col items-center justify-center gap-4 mb-16">
    //     <h2 className="text-6xl font-medium text-black">My Skills</h2>
    //     <p className="text-lg text-center max-w-[600px]">
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
    //       tenetur sapiente voluptate eaque ipsam quidem.
    //     </p>
    //   </div>
    //   <div className="grid grid-cols-6 gap-8 w-full justify-items-center items-center">
    // {skills.map((skill, i) => (
    //   <PositionAnimation
    //     key={i}
    //     position="y"
    //     initial={60}
    //     animate={0}
    //     delay={i * 0.3}
    //     className="w-full"
    //   >
    //     <div className="flex flex-col items-center justify-center gap-4 bg-white/80 backdrop:blur-2xl w-full h-[300px] shadow-inset-black rounded-xl">
    //       <div className="w-[100px] h-[100px] p-3 bg-white border-2 border-black rounded-full overflow-hidden flex items-center justify-center">
    //         <Image
    //           src={skill.image}
    //           alt={skill.title}
    //           className="w-4/5 h-4/5 object-contain"
    //         />
    //       </div>
    //       <h6 className="font-normal text-lg">{skill.title}</h6>
    //       <ProgressBar delay={i * 0.3} percent={skill.percent} />
    //       <span className="text-sm font-medium text-black">
    //         {skill.percent}%
    //       </span>
    //     </div>
    //   </PositionAnimation>
    // ))}
    //   </div>
    // </div>

    <div className="h-[600px] flex items-center justify-center" id="skills">
      <DynamicSwiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={40}
        title="My Skills"
      >
        {skills.map((skill, i) => (
          <PositionAnimation
            key={i}
            position="y"
            initial={20}
            animate={0}
            delay={i * 0.1}
            className="w-full"
          >
            <div className="flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-2xl w-full h-[300px] shadow-inset-black rounded-xl">
              <div className="w-[100px] h-[100px] p-3 bg-white border-2 border-black rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
              <h6 className="font-normal text-lg">{skill.title}</h6>
              <ProgressBar delay={i * 0.1} percent={skill.percent} />
              <span className="text-sm font-medium text-black">
                {skill.percent}%
              </span>
            </div>
          </PositionAnimation>
        ))}
      </DynamicSwiper>
    </div>
  );
};

export default Skills;
