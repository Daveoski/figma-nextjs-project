import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar3, BsBarChartFill } from "react-icons/bs";
import { ButtonLink } from "@/components/ui/Button";
import { AVATARS, IMAGES } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate">
      {/* Teal hero band — fixed height, so everything below it stays white */}
      <div className="hero-curve absolute inset-x-0 top-0 -z-10 h-110 bg-brand sm:h-120 lg:h-130" />

      <div className="mx-auto grid max-w-360 grid-cols-1 items-start gap-10 px-6 pt-28 lg:grid-cols-2 lg:px-14 lg:pt-36">
        {/* Copy */}
        <div className="max-w-xl">
          <h1 className="text-4xl leading-[1.25] font-bold tracking-tight text-white sm:text-5xl lg:text-[54px]">
            <span className="text-accent-orange">Studying</span> Online is now
            much easier
          </h1>

          <p className="mt-8 text-lg leading-8 text-white/95">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <ButtonLink href="/register" variant="ghost" size="lg">
              Join for free
            </ButtonLink>

            <button
              type="button"
              className="flex items-center gap-5 text-lg text-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                <FaPlay aria-hidden className="ml-1 text-xl text-[#2F80ED]" />
              </span>
              Watch how it works
            </button>
          </div>
        </div>

        {/* Student + floating cards */}
        <div className="relative h-105 w-full sm:h-120 lg:-mt-14 lg:h-140">
          <Image
            src={IMAGES.heroStudent}
            alt="Student holding a folder"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-[72%_100%]"
          />

          {/* 250k Assisted Student */}
          <div className="glass-card absolute top-[24%] left-0 flex items-center gap-4 rounded-xl px-5 py-4 shadow-lg">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue/20">
              <BsCalendar3 aria-hidden className="text-2xl text-accent-blue" />
            </span>
            <span className="leading-tight text-heading">
              <span className="block text-xl font-bold">250k</span>
              Assisted Student
            </span>
          </div>

          {/* Chart chip */}
          <div className="absolute top-[20%] right-0 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-pink shadow-lg">
            <BsBarChartFill aria-hidden className="text-2xl text-white" />
          </div>

          {/* Congratulations */}
          <div className="glass-card absolute top-[50%] right-0 flex items-center gap-4 rounded-xl px-5 py-4 shadow-lg">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-orange">
              <HiOutlineMail aria-hidden className="text-2xl text-white" />
            </span>
            <span className="leading-tight text-heading">
              <span className="block text-lg font-bold">Congratulations</span>
              Your admission completed
            </span>
          </div>

          {/* User Experience Class */}
          <div className="glass-card absolute bottom-[20%] left-0 rounded-xl px-5 py-4 shadow-lg">
            <div className="flex items-center gap-4">
              <span className="relative">
                <Image
                  src={AVATARS.patricia}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent-green" />
              </span>
              <span className="leading-tight text-heading">
                <span className="block text-lg font-bold">
                  User Experience Class
                </span>
                Today at 12.00 PM
              </span>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-full bg-accent-pink px-8 py-2.5 font-medium text-white transition-colors hover:bg-[#e04a58]"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
