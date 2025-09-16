import React from "react";
import styles from "./hero_header.module.scss";
import { motion } from "framer-motion";

export const HeroHeader: React.FC = () => (
  <motion.div
    className={styles.wrapper}
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 2,
      ease: "easeOut",
      delay: 1,
    }}
  >
    <motion.h1
      className={styles.topText}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: 1.3,
      }}
    >
      It&apos;s always
    </motion.h1>
    <motion.h1
      className={styles.dayOneText}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.8,
        ease: "easeOut",
        delay: 1.6,
      }}
    >
      DAY ONE
    </motion.h1>
  </motion.div>
);
