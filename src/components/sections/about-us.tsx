import React from "react";
import styles from "./about-us.module.scss";
import { SectionHeader } from "@/components/section_header";
import { Aside } from "@/components/aside";
import { RocketDiv } from "@/components/rocket_div";
import { Carousel } from "@/components/carousel";
import Image from "next/image";

export const AboutUs: React.FC = () => (
  <section className={styles.wrapper}>
    <SectionHeader
      title="About Us"
      subtitle="We empower students by providing a focused pathway to learn Amazon Web Services, fostering professional development, social impact, and moral formation to prepare for a future in technology."
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
      description="We equip students with in-demand cloud skills through hands-on workshops, expert-led seminars, and a major annual hackathon. We provide a clear roadmap to earn professional AWS certifications, helping them build the tools they need to excel in their tech careers and drive social transformation."
      isTextLeft={false}
    >
      <div className={styles.boxGlow}>
        <div className={styles.imageWrapper}>
          <Image
            src="/cloud-with-pc.png"
            alt="PC With Cloud"
            className={styles.image}
            fill
          />
        </div>
      </div>
    </Aside>

    <RocketDiv isRight />

    <Aside
      title="Meet ESPI"
      description="Meet Espi! 🌟 The cheerful and cute fairy mascot of UST-AWS Learning Club! With her pink wings and cloud-inspired charm, she aims to soar through the skies with a touch of magic to cloud learning. With Espi, every journey to AWS is fun, bright, and inspiring!"
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
  </section>
);
