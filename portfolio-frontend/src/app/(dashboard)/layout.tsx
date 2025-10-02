import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />

      <div className="min-h-dvh mt-[100px]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
