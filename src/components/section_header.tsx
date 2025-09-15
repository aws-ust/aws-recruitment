import React from "react";
import Image from "next/image";
import styles from "./section_header.module.scss";
import { motion, AnimatePresence } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => (
  <AnimatePresence>
    <motion.header
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src="/bg-space.svg"
        alt="Background Space"
        className={styles.bgSpace}
        fill
        aria-hidden="true"
      />
      <div className={styles.content}>
        <h1 className={styles.header}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </motion.header>
  </AnimatePresence>
);
