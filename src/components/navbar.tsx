"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link as ReactScrollLink } from "react-scroll";
import { LinkType } from "@/utils/types";
import { Squeeze as Hamburger } from "hamburger-react";
import Image from "next/image";

interface NavbarProps {
  links: LinkType[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${!atTop ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <div className={styles.logoWrapper}>
            <Image
              src="/aws_logo.png"
              alt="AWS Learning Club UST"
              fill
              className={styles.logoImage}
            />
          </div>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.name}>
                <ReactScrollLink
                  to={l.id}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  spy={true}
                  activeClass={styles.active}
                  className={styles.navLink}
                >
                  {l.name}
                </ReactScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav
        className={`${styles.mobileNavbar} ${
          !atTop || mobileMenuOpen ? styles.scrolled : ""
        }`}
      >
        <div className={styles.mobileInner}>
          <div className={styles.logoWrapper}>
            <Image
              src="/aws_logo.png"
              alt="AWS Learning Club UST"
              fill
              className={styles.logoImage}
            />
          </div>
          <div className={styles.hamburgerWrapper}>
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={setMobileMenuOpen}
              size={24}
              color="#ffffff"
            />
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileLinks}>
          {links.map((l) => (
            <li key={l.name}>
              <ReactScrollLink
                to={l.id}
                smooth={true}
                duration={800}
                offset={-100}
                spy={true}
                activeClass={styles.active}
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                {l.name}
              </ReactScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
