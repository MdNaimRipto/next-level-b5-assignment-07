"use client";
import React, { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

const SkillsSlider = ({ children }: { children: ReactNode }) => {
  return (
    <SwiperSlide className="mt-[120px] md:mt-[160px]">{children}</SwiperSlide>
  );
};

export default SkillsSlider;
