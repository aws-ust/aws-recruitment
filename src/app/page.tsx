import { Section } from "@/components/section";
import styles from "./page.module.scss";
import { Aside } from "@/components/aside";
export default function Home() {
  return (
    <div className={styles.body}>
      <Section title="Events" description="We are glad to have you here." />
      <Aside
        title="About Us"
        description="Learn more about our mission and values."
      >
        <div className={styles.asideContent}></div>
      </Aside>
    </div>
  );
}
