import React from "react";
import Image from "next/image";
import styles from "./section_header.module.scss";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => (
  <header className={styles.container}>
    <Image
      src="/bg-space.svg"
      alt="Background Space"
      className={styles.bgSpace}
      fill
      aria-hidden="true"
    />
    <div className={styles.content}>
      <h1 className={styles.header}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  </header>
);
