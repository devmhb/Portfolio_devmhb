import React from "react";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_con}>
        <div className={styles.logo}>
          <Image src={logo} width="16" height="16" alt="logo" />
          <h1 className={styles.author}>Mehedi</h1>
        </div>
      </div>
      <div className={styles.nav_menu}>
        <ul className={styles.nav_items}>
          <li className={styles.nav_item}>
            <span>#</span>home
          </li>
          <li className={styles.nav_item}>
            <span>#</span>about
          </li>
          <li className={styles.nav_item}>
            <span>#</span>projects
          </li>
          <li className={styles.nav_item}>
            <span>#</span>contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
