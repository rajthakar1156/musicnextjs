'use client'
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

import { div, main } from "motion/react-client";

export default function Home() {
  return (
    <main>
       <HeroSection/>
       <FeaturedCourses/>
    </main>
  );
}
