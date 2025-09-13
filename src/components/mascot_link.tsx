import styles from "./mascot_link.module.scss";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface MascotLinkProps {
  title: string;
  link: string;
  image: string;
}
export const MascotLink: React.FC<MascotLinkProps> = ({
  title,
  link,
  image,
}: MascotLinkProps) => {
  return (
    <Link href={link}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image src={image} className={styles.image} alt={title} fill />
          </div>
          <h1 className={styles.link}>{title}</h1>
        </div>
      </div>
    </Link>
  );
};
