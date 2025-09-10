import React from "react";
import styles from "./aside.module.scss";

interface AsideProps {
  title: string;
  subtitle?: string;
  description: string;
  isTextLeft?: boolean;
  children: React.ReactNode;
}

export const Aside: React.FC<AsideProps> = ({
  title,
  description,
  isTextLeft = false,
  subtitle,
  children,
}) => {
  return (
    <div
      className={styles.aside}
      style={{ flexDirection: isTextLeft ? "row-reverse" : "row" }}
    >
      <div className={styles.content}>{children}</div>
      <div className={styles.text}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
