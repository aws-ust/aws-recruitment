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
  <div className={styles.bgSpace}>
    <Image src="/bg-space.svg" alt="Background Space" fill aria-hidden="true" />
    <div className={styles.content}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h1 className={styles.header}>{title}</h1>
          {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);
