import React from "react";
import Link from "next/link";
import styles from "../styles/components/Contact.module.scss";
import Image from "next/image";
import Email from "../images/Email.png";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ slashOrHash }) => {
  return (
    <div className={styles.contact_con}>
      <div className={styles.contact_header}>
        <div className={styles.title}>
          <h1>
            <span>{slashOrHash}</span>contact-me
          </h1>
          <p>who am i ?</p>
        </div>
        <p className={styles.line}></p>
      </div>
      <div className={styles.contact_wrapper}>
        <div className={styles.row_left}>
          <p className={styles.desc}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className={styles.row_right}>
          <h3>Message me here</h3>
          <div className={styles.media_con}>
            <Image src={Email} alt="email" height="" width="" />
            <a href="mailto:mehedibuiyan734@gmail.com">
              mehedibuiyan734@gmail.com
            </a>
          </div>
          <div className={styles.media_con}>
            <p>
              <FontAwesomeIcon icon={faMobileRetro} />
            </p>
            <a href="tel:+8801910819923">+88019108-19923</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
