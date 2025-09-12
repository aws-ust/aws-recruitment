import React from "react";
import styles from "./events.module.scss";
import { eventsData } from "@/utils/data";
import { EventCard } from "@/components/event_card";
import { Button } from "@/components/button";
import { SectionHeader } from "../section_header";

export const EventsSection: React.FC = () => (
  <section className={styles.section}>
    <SectionHeader
      title="Events"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra consequat blandit. Maecenas sit amet aliquet dolor, ac feugiat neque. Nullam metus dui, vehicula quis ultrices quis, efficitur a purus."
    />
    <div className={styles.eventsGrid}>
      {eventsData.map((event, idx) => (
        <EventCard
          key={event.title + idx}
          title={event.title}
          image={event.image}
          description={event.description}
        />
      ))}
    </div>
    <div className={styles.buttonWrapper}>
      <Button text="Load More" onClick={() => {}} />
    </div>
  </section>
);
