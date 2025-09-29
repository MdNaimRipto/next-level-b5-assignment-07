"use client";
import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useSwiper } from "swiper/react";

const DynamicNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="border border-primary rounded-full w-8 md:w-12 h-8 md:h-12 flex items-center justify-center text-xl relative z-50 cursor-pointer hover:bg-primary hover:text-secondary duration-1000"
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="border border-primary rounded-full w-8 md:w-12 h-8 md:h-12 flex items-center justify-center text-xl relative z-50 cursor-pointer hover:bg-primary hover:text-secondary duration-1000"
      >
        <MdKeyboardDoubleArrowLeft className="rotate-180" />
      </button>
    </div>
  );
};

export default DynamicNavigation;
