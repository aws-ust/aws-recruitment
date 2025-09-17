import React from "react";
import Image from "next/image";
import styles from "./section_header.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { style } from "framer-motion/client";

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
      <h1 className={styles.header}>{title}</h1>
      {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
    </div>
  </div>
);
