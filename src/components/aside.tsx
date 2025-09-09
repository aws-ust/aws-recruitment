import React from "react";
import styles from "./aside.module.scss";

interface AsideProps {
  title: string;
  description: string;
  isTextLeft?: boolean;
  children: React.ReactNode;
}

export const Aside: React.FC<AsideProps> = ({
  title,
  description,
  isTextLeft = false,
  children,
}) => {
  return (
    <div
      className={styles.aside}
      style={{ flexDirection: isTextLeft ? "row-reverse" : "row" }}
    >
      <div className={styles.content}>{children}</div>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
