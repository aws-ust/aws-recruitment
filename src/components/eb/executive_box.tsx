import React from "react";
import Image from "next/image";
import styles from "./executive_box.module.scss";

interface ExecutiveBoxProps {
  name: string;
  position: string;
  image: string;
}

export const ExecutiveBoardBox: React.FC<ExecutiveBoxProps> = ({
  name,
  position,
  image,
}) => (
  <div className={styles.box}>
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className={styles.image}
      />
    </div>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
    </div>
  </div>
);
