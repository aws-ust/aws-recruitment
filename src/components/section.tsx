import React from "react";
import Image from "next/image";
import { SectionHeader } from "./section_header";
import styles from "./section.module.scss";

interface SectionProps {
  title: string;
  description?: string;
  hasDivider?: boolean;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  hasDivider = true,
  children,
}) => (
  <section className={styles.section}>
    <Image
      src="/bg-space.svg"
      alt="Background Space"
      className={styles.bgSpace}
      fill
      aria-hidden="true"
    />
    <div className={styles.content}>
      <SectionHeader title={title ?? ""} subtitle={description ?? ""} />
      {children}
      {hasDivider && <hr className={styles.lineBreak} />}
    </div>
  </section>
);
