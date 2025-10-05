/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import Loader from "@/components/Loader";
import { useUserContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <Navbar />

      <div className="min-h-dvh mt-[100px]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
