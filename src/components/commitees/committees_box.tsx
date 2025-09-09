import React from "react";
import styles from "./committees_box.module.scss";

interface CommitteeBoxProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const CommitteeBox: React.FC<CommitteeBoxProps> = ({
  title,
  description,
  image,
  index,
}) => (
  <div className={index % 2 !== 0 ? styles.odd : styles.even}>
    <img src={image} alt={title} className={styles.image} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);
