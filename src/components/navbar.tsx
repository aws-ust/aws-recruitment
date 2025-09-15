"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "@/utils/types";
import { Squeeze as Hamburger } from "hamburger-react";

interface NavbarProps {
  links: Link[];
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
          <h1 className={styles.logo}>AWSLC-UST</h1>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.name}>
                <a href={l.link}>{l.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav
        className={`${styles.mobileNavbar} ${!atTop ? styles.scrolled : ""}`}
      >
        <div className={styles.mobileInner}>
          <h1 className={styles.logo}>AWSLC-UST</h1>
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
              <a href={l.link} onClick={closeMobileMenu}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
