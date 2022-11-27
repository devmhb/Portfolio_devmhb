import React from "react";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
// import github from "../images/github.png";
// import facebook from "../images/facebook-logo-png-2346.png";
// import linkdin from "../images/linkedin-logo-png-2048.png";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.link_con}>
        <div className={styles.line}></div>
        <Image src={github} height="" width="" alt="" />
        <Image src={facebook} height="32" width="32" alt="" />
        <Image src={linkdin} height="32" width="32" alt="" />
      </div> */}
      <div className={styles.nav_wrapper}>
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
      </div>
    </nav>
  );
};

export default Navbar;
