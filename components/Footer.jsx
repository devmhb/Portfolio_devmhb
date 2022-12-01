import React from "react";
import styles from "../styles/components/Footer.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
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
          <div className={styles.logo_con}>
            <Image src={logo} height="" width="" alt="logo" />
            Mehedi
            <div className={styles.desc}>
              Web designer and front-end developer based in Ukraine
            </div>
          </div>
        </div>
        <div className={styles.row_right}>
          <h3>Media</h3>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faSquareInstagram} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
