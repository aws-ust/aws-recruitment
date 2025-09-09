import React from "react";
import Image from "next/image";
import styles from "./event_card.module.scss";

interface EventCardProps {
  title: string;
  image: string;
  description: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  image,
  description,
}) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={title}
        className={styles.image}
        width={350}
        height={150}
      />
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);
