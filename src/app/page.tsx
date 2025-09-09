import styles from "./page.module.scss";
import { SectionHeader } from "@/components/section_header";
import { Aside } from "@/components/aside";
export default function Home() {
  return (
    <div className={styles.body}>
      <SectionHeader title="Events" subtitle="We are glad to have you here." />
      <Aside
        title="About Us"
        description="Learn more about our mission and values."
      >
        <div className={styles.asideContent}></div>
      </Aside>
    </div>
  );
}
