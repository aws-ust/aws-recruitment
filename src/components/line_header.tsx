import React from "react";
import styles from "./line_header.module.scss";

interface LineHeaderProps {
  text: string;
  isLeft?: boolean;
}

export const LineHeader: React.FC<LineHeaderProps> = ({
  text,
  isLeft = false,
}) => (
  <div className={styles.wrapper}>
    {!isLeft && <div className={styles.line} />}
    <span className={isLeft ? styles.left : styles.right}>{text}</span>
    {isLeft && <div className={styles.line} />}
  </div>
);
