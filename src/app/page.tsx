"use client";
import { EventsSection } from "@/components/sections/events";
import { AboutUs } from "@/components/sections/about-us";
import { People } from "@/components/sections/people";
import { MascotLink } from "@/components/mascot_link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.mascotLinksContainer}>
        <MascotLink title="About" link="/about" image="/aws-mascot.png" />
        <MascotLink title="Our Team" link="/team" image="/aws-mascot.png" />
        <MascotLink title="Events" link="/events" image="/aws-mascot.png" />
      </div>
      <AboutUs />
      <People />
      <EventsSection />
    </>
  );
}
