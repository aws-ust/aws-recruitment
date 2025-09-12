"use client";
import { EventsSection } from "@/components/sections/events";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.body}>
      <EventsSection />
    </div>
  );
}
