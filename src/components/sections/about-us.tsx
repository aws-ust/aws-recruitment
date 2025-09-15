import React from "react";
import styles from "./about-us.module.scss";
import { SectionHeader } from "@/components/section_header";
import { Aside } from "@/components/aside";
import { RocketDiv } from "@/components/rocket_div";
import { LineDivider } from "@/components/line_divider";
import { Carousel } from "@/components/carousel";
import Image from "next/image";

export const AboutUs: React.FC = () => (
  <section className={styles.wrapper}>
    <SectionHeader
      title="About Us"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra consequat blandit. Maecenas sit amet aliquet dolor, ac feugiat neque. Nullam metus dui, vehicula quis ultrices quis, efficitur a purus."
    />

    <Carousel />

    <Aside
      title="MISSION"
      description="Our mission is to provide accessible and comprehensive AWS education to students at UST. We aim to bridge the gap between theoretical knowledge and practical cloud computing skills, empowering our members to excel in the rapidly evolving tech industry."
      isTextLeft={false}
    >
      <div className={styles.boxGlow}>
        <div className={styles.imageWrapper}>
          <Image src="/arrow.png" alt="Mission" className={styles.image} fill />
        </div>
      </div>
    </Aside>

    <Aside
      title="VISION"
      description="To become the leading AWS student community in the Philippines, fostering innovation, collaboration, and excellence in cloud computing education while building a strong network of future cloud professionals."
      isTextLeft={true}
    >
      <div className={styles.boxGlow}>
        <div className={styles.imageWrapper}>
          <Image src="/bulb.png" alt="Vision" className={styles.image} fill />
        </div>
      </div>
    </Aside>

    <RocketDiv />

    <Aside
      title="What we do"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      isTextLeft={false}
    >
      <div className={styles.whatWeDoContent}>
        <div className={styles.grid}>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
        </div>
      </div>
    </Aside>

    <RocketDiv isRight />

    <Aside
      title="ESPI"
      description="Exceptional Student Performance Initiative - Our flagship program designed to recognize and nurture outstanding students in cloud computing. Through mentorship, advanced workshops, and real-world projects, ESPI participants gain invaluable experience and industry connections."
      isTextLeft={true}
    >
      <div className={styles.boxGlow}>
        <div className={styles.imageWrapper}>
          <Image
            src="/aws-mascot.png"
            alt="ESPI Mascot"
            className={styles.image}
            fill
          />
        </div>
      </div>
    </Aside>

    <LineDivider />
  </section>
);
