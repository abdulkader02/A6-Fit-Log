import Image from "next/image";
import React from "react";

import footerLogo from "@/assets/SVG.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0d0f12] text-gray-400">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          px-4
          py-6
          text-center
          
          sm:px-6
          sm:py-7
          
          md:px-8
          
          lg:flex-row
          lg:gap-6
          lg:px-10
          lg:py-6
          lg:text-left
        "
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src={footerLogo}
            alt="FITLOG Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <span
            className="
              text-base
              font-extrabold
              uppercase
              tracking-[0.15em]
              text-white
              sm:text-lg
            "
          >
            FITLOG
          </span>
        </div>

        {/* Copyright & Tagline */}
        <p
          className="
            max-w-full
            text-[11px]
            leading-5
            text-gray-500
            sm:text-xs
            md:text-sm
          "
        >
          &copy; {new Date().getFullYear()} FitLog — Workout Library.
          <span className="text-gray-400">
            {" "}
            Train hard, log honest.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
