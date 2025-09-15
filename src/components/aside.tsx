import React from "react";
import styles from "./aside.module.scss";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <motion.div
        className={styles.aside}
        style={{ flexDirection: isTextLeft ? "row-reverse" : "row" }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </div>
          <p className={styles.description}>{description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
