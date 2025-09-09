import React from "react";
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
    <h1 className={styles.header}>{title}</h1>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </header>
);
