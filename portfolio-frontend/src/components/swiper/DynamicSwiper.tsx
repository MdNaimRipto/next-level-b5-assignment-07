"use client"; // This is only needed in the wrapper once

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DynamicNavigation from "./DynamicNavigation";

interface DynamicSwiperProps {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  speed?: number;
  breakpoints?: {
    [width: number]: import("swiper/types").SwiperOptions;
  };
  title: string;
}

const DynamicSwiper = ({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  loop = false,
  speed = 1500,
  breakpoints,
  title,
}: DynamicSwiperProps) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      speed={speed}
      breakpoints={breakpoints}
      className="swiper"
    >
      <div className="flex items-center justify-between md:px-14 absolute top-0 w-full">
        <div className="flex flex-col justify-between gap-4 md:gap-6">
          <h6 className="text-xs md:text-base">|| Awesome Portfolio</h6>
          <h2 className="text-2xl md:text-5xl">{title}</h2>
        </div>
        <DynamicNavigation />
      </div>

      {children.map((child, i) => (
        <SwiperSlide key={i} className="mt-[120px] md:mt-[160px]">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DynamicSwiper;
