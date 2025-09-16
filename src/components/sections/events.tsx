import React, { useState } from "react";
import styles from "./events.module.scss";
import { eventsData } from "@/utils/data";
import { EventCard } from "@/components/event_card";
import { Button } from "@/components/button";
import { SectionHeader } from "../section_header";

const PAGE_SIZE = 6;

export const EventsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const hasMore = visibleCount < eventsData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, eventsData.length));
  };

  return (
    <section className={styles.section}>
      <SectionHeader
        title="Events"
        subtitle="Discover the highlights that shape our journey!"
      />
      <div className={styles.eventsWrapper}>
        {eventsData.slice(0, visibleCount).map((event, idx) => (
          <EventCard
            key={event.title + idx}
            title={event.title}
            image={event.image}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
      {hasMore && (
        <div className={styles.buttonWrapper}>
          <Button text="Load More" onClick={handleLoadMore} />
        </div>
      )}
    </section>
  );
};
