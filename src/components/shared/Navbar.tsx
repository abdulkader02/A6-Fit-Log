"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutProvider";

const Navbar = () => {
  const { plan, saved } = useContext(WorkoutContext);
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#25272d] bg-[#0d0f12]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
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

        {/* Navigation */}
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

        {/* Right side */}
        <div className="flex items-center gap-2">
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
        </div>

      </div>
    </nav>
  );
};

export default Navbar;