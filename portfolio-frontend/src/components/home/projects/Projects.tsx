"use client";
import Image from "next/image";
import React from "react";
import pr1 from "@/assets/images/projects/p1 - Copy.png";
import pr2 from "@/assets/images/projects/p2.png";
import pr4 from "@/assets/images/projects/p4.png";
import pr5 from "@/assets/images/projects/p5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectNavigation from "./ProjectNavigation";
import ScrollYAnimation from "@/components/animations/ScrollYAnimation";

const Projects = () => {
  const cards = [
    {
      img: pr1,
      title: "Travel Buddy - Travel Management Application",
      stack: "|| FullStack - TypeScript | Next.js | Node.js | Framer Motion",
    },
    {
      img: pr2,
      title: "Tech Mart - Tech E-commerce Application",
      stack: "|| TypeScript | Next.js | Node.js | Tailwind.CSS",
    },
    {
      img: pr5,
      title: "Tech Mart - Tech E-commerce Application",
      stack: "|| TypeScript | Next.js | Node.js | Tailwind.CSS",
    },
    {
      img: pr4,
      title: "Tech Mart - Tech E-commerce Application",
      stack: "|| TypeScript | Next.js | Node.js | Tailwind.CSS",
    },
  ];

  return (
    <ScrollYAnimation>
      <div className="h-dvh flex items-center justify-center" id="projects">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={40}
          className="projects"
          loop={true}
          speed={1500}
        >
          <div className="flex items-center justify-between md:px-14 absolute top-0 w-full">
            <div className="flex flex-col justify-between gap-4 md:gap-6">
              <h6 className="text-xs md:text-base">|| Awesome Portfolio</h6>
              <h2 className="text-2xl md:text-5xl">My Projects</h2>
            </div>
            <ProjectNavigation />
          </div>
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="mt-[120px] md:mt-[160px]">
              <div className="w-full h-[348px] lg:h-[448px] relative z-50 overflow-hidden bg-[#f1f1f1] shadow-xl hover:scale-105 duration-1000 shadow-inset-black">
                <Image
                  src={card.img}
                  alt=""
                  className="absolute z-0 opacity-50 -rotate-45 w-full h-full object-contain -top-1/2 -left-1/2 scale-200"
                />
                <Image
                  src={card.img}
                  alt=""
                  className="px-[30px] md:px-[40px] lg:px-[60px] top-[30px] md:top-[40px] lg:top-[60px] z-20 absolute"
                />
                <div className="w-full h-full flex items-center justify-center bg-black/55 relative z-30 opacity-0 hover:opacity-100 duration-1000 group gap-6">
                  <button className="bg-white text-primary rounded cursor-pointer w-[160px] p-2">
                    View Project
                  </button>
                  <button className="bg-white text-primary rounded cursor-pointer w-[160px] p-2">
                    Project Details
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 mt-6 px-4">
                <h2 className="text-xl text-primary">{card.title}</h2>
                <h6 className="text-xs whitespace-nowrap text-primary">
                  {card.stack}
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ScrollYAnimation>
  );
};

export default Projects;
