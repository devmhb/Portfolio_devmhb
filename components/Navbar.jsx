import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedinIn,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const handleNav = () => {
    setBurger((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (burger) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [burger]);

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
        {burger && (
          <div className={styles.burger_con}>
            <ul className={styles.burger_items}>
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
              <Link href="./projects">
                <li className={styles.nav_item}>
                  <span>#</span>projects
                </li>
              </Link>
              <Link href="/contacts">
                <li className={styles.nav_item}>
                  <span>#</span>contacts
                </li>
              </Link>
              <div className={styles.icon_con}>
                <Link href="https://github.com/devmhb" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/devmhb/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>

                <Link href="https://www.instagram.com/devmhb/" target="_blank">
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </Link>
              </div>
            </ul>
          </div>
        )}
        <div
          className={`${styles.humBurger} ${burger ? styles.cross : null} `}
          onClick={handleNav}
        >
          <span className={styles.item}></span>
          <span className={styles.item}></span>
          <span className={styles.item}></span>
        </div>
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
            <Link href="./projects">
              <li className={styles.nav_item}>
                <span>#</span>projects
              </li>
            </Link>
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
