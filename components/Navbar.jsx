import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <Link href="/">
          <div className={styles.logo_con}>
            <div className={styles.logo}>
              <Image src={logo} width="16" height="16" alt="logo" />
              <h1 className={styles.author}>Mehedi Hasan</h1>
            </div>
          </div>
        </Link>
        {burger && (
          <div className={styles.burger_con}>
            <motion.ul
              className={styles.burger_items}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <Link href="/">
                <motion.li className={styles.nav_item} variants={item}>
                  <span>#</span>home
                </motion.li>
              </Link>
              <Link href="/about">
                <motion.li className={styles.nav_item} variants={item}>
                  <span>#</span>about
                </motion.li>
              </Link>
              <Link href="./projects">
                <motion.li className={styles.nav_item} variants={item}>
                  <span>#</span>projects
                </motion.li>
              </Link>
              <Link href="/contacts">
                <motion.li className={styles.nav_item} variants={item}>
                  <span>#</span>contacts
                </motion.li>
              </Link>
              <motion.div className={styles.icon_con} variants={item}>
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
              </motion.div>
            </motion.ul>
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
