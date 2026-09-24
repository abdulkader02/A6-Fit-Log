"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutProvider";

const Navbar = () => {
  const { plan, saved } = useContext(WorkoutContext);
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-[#25272d] bg-[#0d0f12]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <div className="tabs tabs-boxed rounded-3xl border border-[#25272d] bg-[#14161a] p-1">

            <Link
              href="/"
              className={`tab rounded-3xl text-xs font-semibold ${
                pathname === "/"
                  ? "tab-active bg-[#25272d] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`tab rounded-3xl text-xs font-semibold ${
                pathname === "/my-plan"
                  ? "tab-active bg-[#25272d] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Desktop Plan + Saved */}
          <div className="hidden items-center gap-2 sm:flex">

            <Link
              href="/my-plan"
              className="btn btn-xs rounded-full border-none bg-[#ccff00] font-bold text-black hover:bg-[#d8ff4d]"
            >
              Plan

              <span className="badge badge-sm border-none bg-black text-[#ccff00]">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="btn btn-xs rounded-full border-[#3a3d43] text-gray-300 hover:border-[#ccff00] hover:bg-transparent hover:text-white"
            >
              Saved

              <span className="badge badge-sm border-none bg-[#25272d] text-gray-300">
                {saved.length}
              </span>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-sm btn-square border-[#25272d] bg-[#14161a] text-white hover:bg-[#25272d] sm:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#25272d] bg-[#0d0f12] px-4 py-4 sm:hidden">

          <div className="flex flex-col gap-2">

            {/* Workouts */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                pathname === "/"
                  ? "bg-[#25272d] text-[#ccff00]"
                  : "text-gray-400 hover:bg-[#14161a] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold ${
                pathname === "/my-plan"
                  ? "bg-[#25272d] text-[#ccff00]"
                  : "text-gray-400 hover:bg-[#14161a] hover:text-white"
              }`}
            >
              <span>My Plan</span>

              <span className="badge border-none bg-[#ccff00] text-black">
                {plan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-400 hover:bg-[#14161a] hover:text-white"
            >
              <span>Saved</span>

              <span className="badge border border-[#3a3d43] bg-transparent text-gray-300">
                {saved.length}
              </span>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;