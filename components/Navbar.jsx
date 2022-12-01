import React from "react";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <Link href="/">
          <div className={styles.logo_con}>
            <div className={styles.logo}>
              <Image src={logo} width="16" height="16" alt="logo" />
              <h1 className={styles.author}>Mehedi</h1>
            </div>
          </div>
        </Link>
        <div className={styles.nav_menu}>
          <ul className={styles.nav_items}>
            <Link href="/">
              <li className={styles.nav_item}>
                <span>#</span>home
              </li>
            </Link>
            <Link href="/about">
              <li className={styles.nav_item}>
                <span>#</span>about
              </li>
            </Link>
            <li className={styles.nav_item}>
              <span>#</span>projects
            </li>
            <Link href="/contacts">
              <li className={styles.nav_item}>
                <span>#</span>contacts
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
