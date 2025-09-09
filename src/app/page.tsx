import { Section } from "@/components/section";
import styles from "./page.module.scss";
import { Aside } from "@/components/aside";
import { LineHeader } from "@/components/line_header";
export default function Home() {
  return (
    <div className={styles.body}>
      <Section title="Events" description="We are glad to have you here.">
        <LineHeader text="COMMITTEES" />
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
