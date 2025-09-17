"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import { Link as ReactScrollLink } from "react-scroll";
import { LinkType } from "../utils/types";
import Link from "next/link";

interface FooterProps {
  links: LinkType[];
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
                  <ReactScrollLink
                    to={link.id}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    spy={true}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </ReactScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.socials}>
            <h3>SOCIALS</h3>
            <div className={styles.icons}>
              <Link
                href="https://www.facebook.com/awsust"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/aws-ust/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
