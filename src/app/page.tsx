"use client";
import { EventsSection } from "@/components/sections/events";
import { AboutUs } from "@/components/sections/about-us";
import { People } from "@/components/sections/people";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <People />
      <EventsSection />
    </>
  );
}
