import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer aria-label="Footer" className="py-6">
      <div className="container px-4 md:px-16 lg:px-4 mx-auto flex justify-center items-center gap-2 pt-10 pb-4">
        <p className="text-base">
          © 2025{" "}
          <Link href="/" className="underline">
            MD Naimur Rahman
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
