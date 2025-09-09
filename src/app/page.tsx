import { Section } from "@/components/section";
import { Aside } from "@/components/aside";
import styles from "./page.module.scss";
import { Committees } from "@/components/commitees/committees";
import { EventCard } from "@/components/event_card";
import { committeesData, eventsData } from "./data";

export default function Home() {
  return (
    <div className={styles.body}>
      <Section title="Events" description="We are glad to have you here.">
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
        <Committees committees={committeesData} />
      </Section>
      <Aside
        title="About Us"
        description="Learn more about our mission and values."
      >
        <div className={styles.asideContent}></div>
      </Aside>
    </div>
  );
}
