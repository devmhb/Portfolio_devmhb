import React from "react";
import Link from "next/link";
import styles from "../styles/components/Contact.module.scss";
import Image from "next/image";
import Email from "../images/Email.png";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Contact = ({ slashOrHash }) => {
  return (
    <motion.div
      className={styles.contact_con}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
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
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <a href="mailto:devmhbbd@gmail.com">devmhbbd@gmail.com</a>
          </div>
          <div className={styles.media_con}>
            <p>
              <FontAwesomeIcon icon={faPhone} />
            </p>
            <a href="tel:+8801910819923">+88019108-19923</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
