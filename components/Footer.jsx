import React from "react";
import styles from "../styles/components/Footer.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className={styles.footer_con}>
      <div className={styles.footer_wrapper}>
        <div className={styles.row_left}>
          <Link href="/">
            <div className={styles.logo_con}>
              <Image src={logo} height="20" width="20" alt="logo" />
              <h3>Mehedi Hasan</h3>
            </div>
          </Link>

          <div className={styles.desc}>Front-End developer</div>
        </div>

        <div className={styles.row_right}>
          <h3>Media</h3>
          <div className={styles.icon_con}>
            <Link href="https://github.com/devmhb" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>

            <Link href="https://www.linkedin.com/in/devmhb/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>

            <Link href="https://www.instagram.com/devmhb/" target="_blank">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        © Copyright 2022. Developed by Mehedi Hasan
      </p>
    </div>
  );
};

export default Footer;
