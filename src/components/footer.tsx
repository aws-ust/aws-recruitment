import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import { Link } from "../utils/types";

interface FooterProps {
  links: Link[];
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoSection}>
          <Image
            src="/aws_logo.png"
            alt="AWS Learning Club Logo"
            width={120}
            height={120}
          />
          <span className={styles.madeWithLove}>
            Made with love by AWSLC-UST
          </span>
        </div>
        <div className={styles.sectionsSocialsWrapper}>
          <div className={styles.sections}>
            <h3>SECTIONS</h3>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.socials}>
            <h3>SOCIALS</h3>
            <div className={styles.icons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              ></a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
