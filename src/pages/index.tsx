import Head from "next/head";
import { Hero } from "@/components/home/Hero";
import {
  AllInOne,
  PhysicalClassroom,
  Success,
  WhatIsTotc,
} from "@/components/home/Sections";
import { Features } from "@/components/home/Features";
import {
  ExploreCourse,
  LatestNews,
  WhatTheySay,
} from "@/components/home/Showcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>TOTC — Studying Online is now much easier</title>
      </Head>

      <Hero />
      <Success />
      <AllInOne />
      <WhatIsTotc />
      <PhysicalClassroom />
      <Features />
      <ExploreCourse />
      <WhatTheySay />
      <LatestNews />
    </>
  );
}
