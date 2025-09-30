"use client";

import { useState } from "react";

const OptionsTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Latest Blogs", "Most Popular", "Explore All"];
  return (
    <div className="my-16 flex items-center justify-center gap-6">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className="w-[130px] text-lg cursor-pointer"
          onClick={() => setSelectedTab(i)}
        >
          {tab}
          <span
            className={`border-b-[3px] border-b-black block mt-2 mx-auto ${
              i === selectedTab ? "w-[60px] opacity-100" : "w-0 opacity-0"
            } duration-500`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default OptionsTab;
