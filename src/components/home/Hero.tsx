import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar3, BsBarChartFill } from "react-icons/bs";
import { ButtonLink } from "@/components/ui/Button";
import { AVATARS, IMAGES } from "@/data/site";

export function Hero() {
  return (
    <section className="isolate overflow-hidden">
      <div className="hero-curve relative inset-x-0 top-0 overflow-hidden bg-brand">
        <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-4 pt-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-14 lg:pt-36">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="text-3xl leading-[1.2] font-bold tracking-tight text-white sm:text-4xl lg:text-[54px] lg:leading-[1.25]">
              <span className="text-accent-orange">Studying</span> Online is now
              much easier
            </h1>

            <p className="mt-6 text-base leading-7 text-white/95 sm:mt-8 sm:text-lg sm:leading-8">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
              <ButtonLink href="/register" variant="ghost" size="lg">
                Join for free
              </ButtonLink>

              <button
                type="button"
                className="flex items-center gap-3 text-base font-medium text-white sm:gap-5 sm:text-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg sm:h-16 sm:w-16">
                  <FaPlay aria-hidden className="ml-1 text-base text-[#2F80ED] sm:text-xl" />
                </span>
                Watch how it works
              </button>
            </div>
          </div>

          {/* Student + floating cards */}
          <div className="relative mx-auto h-[22rem] w-full max-w-[28rem] sm:h-[28rem] lg:mx-0 lg:mt-0 lg:h-[35rem] lg:max-w-none lg:w-full">
            <Image
              src={IMAGES.heroStudent}
              alt="Student holding a folder"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="origin-bottom scale-[0.82] object-contain object-center sm:scale-[0.9] lg:scale-[1]"
            />

            {/* 250k Assisted Student */}
            <div className="glass-card absolute left-0 top-[18%] flex items-center gap-3 rounded-xl px-3 py-3 shadow-lg sm:gap-4 sm:px-5 sm:py-4 lg:left-0 lg:top-[24%]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/20 sm:h-12 sm:w-12">
                <BsCalendar3 aria-hidden className="text-xl text-accent-blue sm:text-2xl" />
              </span>
              <span className="leading-tight text-heading">
                <span className="block text-base font-bold sm:text-xl">250k</span>
                <span className="text-sm sm:text-base">Assisted Student</span>
              </span>
            </div>

            {/* Chart chip init */}
            <div className="absolute right-2 top-[20%] flex h-12 w-12 items-center justify-center rounded-xl bg-accent-pink shadow-lg sm:right-0 sm:h-14 sm:w-14">
              <BsBarChartFill aria-hidden className="text-xl text-white sm:text-2xl" />
            </div>

            {/* Congratulations */}
            <div className="glass-card absolute right-0 top-[48%] flex items-center gap-3 rounded-xl px-3 py-3 shadow-lg sm:gap-4 sm:px-5 sm:py-4 lg:top-[50%]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-orange sm:h-12 sm:w-12">
                <HiOutlineMail aria-hidden className="text-xl text-white sm:text-2xl" />
              </span>
              <span className="leading-tight text-heading">
                <span className="block text-sm font-bold sm:text-lg">Congratulations</span>
                <span className="text-xs sm:text-base">Your admission completed</span>
              </span>
            </div>

            {/* User Experience Class */}
            <div className="glass-card absolute bottom-[8%] left-0 rounded-xl px-3 py-3 shadow-lg sm:bottom-[12%] sm:px-5 sm:py-4 lg:bottom-[20%]">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="relative">
                  <Image
                    src={AVATARS.patricia}
                    alt=""
                    width={48}
                    height={48}
                    className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                  />
                  <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-accent-green sm:h-3.5 sm:w-3.5" />
                </span>
                <span className="leading-tight text-heading">
                  <span className="block text-sm font-bold sm:text-lg">
                    User Experience Class
                  </span>
                  <span className="text-xs sm:text-base">Today at 12.00 PM</span>
                </span>
              </div>

              <button
                type="button"
                className="mt-3 w-full rounded-full bg-accent-pink px-6 py-2 font-medium text-white transition-colors hover:bg-[#e04a58] sm:mt-4 sm:px-8 sm:py-2.5"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
