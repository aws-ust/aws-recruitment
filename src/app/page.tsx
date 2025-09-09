import styles from "./page.module.scss";
import { SectionHeader } from "@/components/section_header";
export default function Home() {
  return (
    <div className={styles.body}>
      <SectionHeader
        title="Welcome to Our Website"
        subtitle="We are glad to have you here."
      />
    </div>
  );
}
