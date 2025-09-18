"use client";
import React from "react";
import Image from "next/image";
import styles from "./clouds.module.scss";
import { motion } from "framer-motion";

export const Clouds: React.FC = () => {
  return (
    <div className={styles.cloudsContainer}>
      <motion.div
        className={`${styles.cloud} ${styles.cloud1}`}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/pink_clouds/1.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud2}`}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image src="/pink_clouds/2.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud3}`}
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image src="/pink_clouds/3.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud4}`}
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Image src="/pink_clouds/4.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud5}`}
        animate={{
          y: [0, -22, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Image src="/pink_clouds/5.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud6}`}
        animate={{
          y: [0, -16, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Image src="/pink_clouds/6.webp" alt="" fill />
      </motion.div>
      <motion.div
        className={`${styles.cloud} ${styles.cloud7}`}
        animate={{
          y: [0, -19, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Image src="/pink_clouds/2.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud8}`}
        animate={{
          y: [0, -21, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.3,
        }}
      >
        <Image src="/pink_clouds/4.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud9}`}
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.7,
        }}
      >
        <Image src="/pink_clouds/1.webp" alt="" fill />
      </motion.div>

      <motion.div
        className={`${styles.cloud} ${styles.cloud10}`}
        animate={{
          y: [0, -24, 0],
        }}
        transition={{
          duration: 10.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <Image src="/pink_clouds/2.webp" alt="" fill />
      </motion.div>
    </div>
  );
};
