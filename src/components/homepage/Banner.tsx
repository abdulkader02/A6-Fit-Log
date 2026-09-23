import Link from "next/link";
import Image from "next/image";

import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto mt-6 w-full px-4 sm:mt-8 sm:px-6 lg:mt-10">
      <div className="relative mx-auto min-h-[520px] w-full overflow-hidden rounded-2xl bg-[#15171D] px-6 py-10 sm:min-h-[500px] sm:px-10 md:px-12 lg:min-h-[400px] lg:px-16 lg:py-0">

        <div className="grid h-full min-h-[460px] items-center lg:grid-cols-2 lg:min-h-[400px]">

          {/* Left Content */}
          <div className="z-10 max-w-2xl">

            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#C2F800] sm:mb-4 sm:text-sm">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="btn mt-6 h-auto min-h-0 rounded-lg border-0 bg-[#C2F800] px-5 py-3 text-sm font-bold text-black hover:bg-[#d4ff3d]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex h-full items-end justify-center lg:justify-end">
            <Image
              src={bannerImg}
              alt="Person working out"
              priority
              className="
                h-auto
                w-62.5
                object-contain
                sm:w-75
                md:w-82.5
                lg:w-87.5
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;