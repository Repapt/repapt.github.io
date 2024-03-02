import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import styles from './navbar.module.css'
// @ts-ignore
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = ({ toggle }: { toggle: () => void }) => {

  const getStyle = (path: string) => {
    if (path === usePathname()) {
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

export default Navbar;