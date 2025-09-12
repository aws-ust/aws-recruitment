"use client";
import { Section } from "@/components/section";
import { EventsSection } from "@/components/sections/events";
import { Aside } from "@/components/aside";
import styles from "./page.module.scss";
import { Committees } from "@/components/commitees/committees";
import { EventCard } from "@/components/event_card";
import { committeesData, eventsData, executiveBoardData } from "../utils/data";
import { ExecutiveBoard } from "@/components/eb/executive_board";
import { RocketDiv } from "@/components/rocket_div";
import { Button } from "@/components/button";
export default function Home() {
  return (
    <div className={styles.body}>
      <EventsSection />
    </div>
  );
}
