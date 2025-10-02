import Beams from "@/components/animations/BeamBanner";
import { LoginForm } from "@/components/auth/LoginForm";
import NavLogo from "@/components/common/navbar/NavLogo";
import React from "react";

const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <NavLogo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Beams rotation={-60} speed={0.8} beamHeight={150} scale={1.8} />
      </div>
    </div>
  );
};

export default Login;
