"use client";
import { EventsSection } from "@/components/sections/events";
import { AboutUs } from "@/components/sections/about-us";
import { People } from "@/components/sections/people";

export default function Home() {
  return (
    <>
      <AboutUs />
      <People />
      <EventsSection />
    </>
  );
}
