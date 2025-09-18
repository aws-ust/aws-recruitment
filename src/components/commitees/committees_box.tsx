import React from "react";
import Image from "next/image";
import styles from "./committees_box.module.scss";

interface CommitteeBoxProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const CommitteeBox: React.FC<CommitteeBoxProps> = ({ title, description, image, index }) => (
  <div className={`${styles.common} ${index % 2 !== 0 ? styles.odd : styles.even}`}>
    <div className={styles.iconWrapper}>
      <Image src={image} alt={title} className={styles.image} width={40} height={40} />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);
