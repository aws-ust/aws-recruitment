import React from "react";
import styles from "./people.module.scss";
import { SectionHeader } from "@/components/section_header";
import { Committees } from "@/components/commitees/committees";
import { ExecutiveBoard } from "@/components/eb/executive_board";
import { LineDivider } from "@/components/line_divider";
import { committeesData, executiveBoardData } from "@/utils/data";

export const People: React.FC = () => (
  <section className={styles.wrapper}>
    <SectionHeader
      title="The People"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra consequat blandit. Maecenas sit amet aliquet dolor, ac feugiat neque. Nullam metus dui, vehicula quis ultrices quis, efficitur a purus."
    />
    <div className={styles.content}>
      <Committees committees={committeesData} />
      <ExecutiveBoard members={executiveBoardData} />
    </div>
    <LineDivider />
  </section>
);
