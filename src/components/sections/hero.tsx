import React from "react";
import styles from "./hero.module.scss";
import { HeroHeader } from "@/components/hero_header";
import { SectionHeader } from "@/components/section_header";
import { MascotLink } from "@/components/mascot_link";
import { RocketDiv } from "@/components/rocket_div";
import { Clouds } from "@/components/clouds";

export const Hero: React.FC = () => (
  <section className={styles.wrapper}>
    <div className={styles.mainGraphic}>
      <HeroHeader />
      <Clouds />
    </div>

    <SectionHeader
      title="AWS is now in UST!"
      subtitle="AWS Learning Club - España, the first and only student-focused, student-led, cloud education organization powered by AWS in España, Manila. We are student-focused, peer-driven user groups for post-secondary level students worldwide."
    />

    <div className={styles.mascotLinksContainer}>
      <MascotLink title="About" id="about" image="/aws-mascot.png" />
      <MascotLink title="The People" id="people" image="/aws-mascot.png" />
      <MascotLink title="Events" id="events" image="/aws-mascot.png" />
    </div>

    <div className={styles.rocketWrapper}>
      <RocketDiv />
    </div>
  </section>
);
