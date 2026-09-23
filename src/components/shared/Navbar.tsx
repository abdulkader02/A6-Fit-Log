import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/workout"
            className="text-sm font-medium text-[#ccff00] transition hover:text-white"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Desktop Counters */}
          <div className="hidden items-center gap-2 sm:flex">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black transition hover:bg-[#d8ff4d]"
            >
              <span>Plan</span>
              <span>0</span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 rounded-full border border-[#3a3d43] px-3 py-1.5 text-xs font-bold text-[#d1d5db] transition hover:border-[#ccff00] hover:text-white"
            >
              <span>Saved</span>
              <span>0</span>
            </Link>

          </div>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end md:hidden">

            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm px-2 text-white hover:bg-[#181b20]"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-[#25272d] bg-[#14161a] p-2 shadow-xl"
            >
              <li>
                <Link
                  href="/workout"
                  className="text-[#ccff00]"
                >
                  Workout
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="text-gray-300"
                >
                  My Plan
                </Link>
              </li>

              <div className="my-1 border-t border-[#25272d]" />

              <li>
                <Link
                  href="/my-plan"
                  className="text-gray-300"
                >
                  Plan
                  <span className="ml-auto rounded-full bg-[#ccff00] px-2 py-0.5 text-[10px] font-bold text-black">
                    0
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="text-gray-300"
                >
                  Saved
                  <span className="ml-auto rounded-full border border-[#3a3d43] px-2 py-0.5 text-[10px] font-bold text-gray-300">
                    0
                  </span>
                </Link>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;