import { Section } from "@/components/section";
import { Aside } from "@/components/aside";
import styles from "./page.module.scss";
import { Committees } from "@/components/commitees/committees";
import { EventCard } from "@/components/event_card";
import { committeesData, eventsData, executiveBoardData } from "../utils/data";
import { ExecutiveBoard } from "@/components/eb/executive_board";
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
        <ExecutiveBoard members={executiveBoardData} />
        <Aside
          title="About Us"
          description="Learn more about our mission and values."
          subtitle="Subtitle Here"
          isTextLeft={true}
        >
          <div className={styles.asideContent}></div>
        </Aside>
      </Section>
    </div>
  );
}
