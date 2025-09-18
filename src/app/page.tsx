import { EventsSection } from "@/components/sections/events";
import { AboutUs } from "@/components/sections/about-us";
import { People } from "@/components/sections/people";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="people">
        <People />
      </div>
      <div id="events">
        <EventsSection />
      </div>
    </>
  );
}
