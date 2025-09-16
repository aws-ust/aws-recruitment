import React from "react";
import styles from "./people.module.scss";
import { SectionHeader } from "@/components/section_header";
import { Committees } from "@/components/commitees/committees";
import { ExecutiveBoard } from "@/components/eb/executive_board";
import { Heads } from "@/components/commitees/heads";
import {
  committeesData,
  executiveBoardData,
  committeeHeadsData,
} from "@/utils/data";

export const People: React.FC = () => (
  <section className={styles.wrapper}>
    <SectionHeader
      title="The People"
      subtitle="The Executive Board and Committee Heads of UST-AWS Learning Club are a pioneering team of student leaders, committed to fostering innovation and building strong networks within the CICS community, while empowering their skills and knowledge to thrive in cloud technology and beyond."
    />
    <div className={styles.content}>
      <Committees committees={committeesData} />
      <ExecutiveBoard members={executiveBoardData} />
      <Heads members={committeeHeadsData} />
    </div>
  </section>
);
