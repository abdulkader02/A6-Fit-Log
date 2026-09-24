import Image from 'next/image';
import React from 'react';
import footerLogo from '@/assets/SVG.png';
const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0f12] text-gray-400 border-t border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          
          <Image src ={footerLogo} alt="FITLOG Logo" width={32} height={32} />
          <span className="text-base font-extrabold tracking-wider text-white uppercase">
            FITLOG
          </span>
        </div>

        {/* Copyright & Tagline */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;