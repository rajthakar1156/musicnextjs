'use client'
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

import { div, main } from "motion/react-client";

export default function Home() {
  return (
    <main>
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <TestimonialCards/>
       <UpcomingWebinars/>
       <Instructors/>
    </main>
  );
}
