"use client";
import styles from "./mascot_link.module.scss";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import Image from "next/image";

interface MascotLinkProps {
  title: string;
  id: string;
  image: string;
}
export const MascotLink: React.FC<MascotLinkProps> = ({ title, id, image }: MascotLinkProps) => {
  return (
    <ScrollLink to={id} smooth={true} duration={800} offset={-100} spy={true} className={styles.scrollLink}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src={image} className={styles.image} alt={title} fill />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.link}>{title}</h1>
        </div>
      </div>
    </ScrollLink>
  );
};
