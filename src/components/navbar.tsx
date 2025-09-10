"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "@/utils/types";

interface NavbarProps {
  links: Link[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
  );
};
