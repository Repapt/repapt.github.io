"use client";
import React, { HTMLAttributes } from "react";
import Link from "next/link";
import styles from './navbar.module.css';
import { usePathname } from "next/navigation";
import Image from "next/image";

export type NavBarProps = HTMLAttributes<HTMLDivElement> & {
  pathName?: string
}

export const Navbar = (props: NavBarProps) => {
  const { pathName } = props;

  const getStyle = (path: string) => {
    if (path === "") {
      return {
        "color": "var(--light-blue-0)",
        "borderBottom": "3px solid var(--light-blue-0)",
      };
    }
    return {
      "color": "var(--dark-grey-0)"
    };
  }

  return (
    <div className={styles.navbar}>
      <Link className={styles.logoContainer} href="/">
        <Image 
          className={styles.logo}
          src="/res/logo_sl.svg" 
          alt="logo"
          fill={true}
          />
      </Link>
      <div className={styles.links}>
        <Link style={getStyle("/")} className={styles.link} href="/">
          <p>Home</p>
        </Link>
        <Link style={getStyle("/about")} className={styles.link} href="/about">
          <p>About</p>
        </Link>
        <Link style={getStyle("/skills")} className={styles.link} href="/skills">
          <p>Skills</p>
        </Link>
        <Link style={getStyle("/games")} className={styles.link} href="/games">
          <p>Games</p>
        </Link>
      </div>
    </div>
  );
};
