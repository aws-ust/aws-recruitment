import React from "react";
import styles from "./hero_header.module.scss";

export const HeroHeader: React.FC = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.topText}>It&apos;s always</h1>
    <h1 className={styles.dayOneText}>DAY ONE</h1>
  </div>
);
