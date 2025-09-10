import React from "react";
import Image from "next/image";
import styles from "./rocket_div.module.scss";

interface RocketDivProps {
  isRight?: boolean;
}

export const RocketDiv: React.FC<RocketDivProps> = ({ isRight = false }) => {
  return (
    <div
      className={`${styles.divider} ${isRight ? styles.right : styles.left}`}
    >
      <Image
        className={styles.rocket}
        src="/rocket.svg"
        alt="Rocket Divider"
        fill
      />
    </div>
  );
};
