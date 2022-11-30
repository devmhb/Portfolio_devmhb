import React from "react";
import styles from "../styles/components/Contact.module.scss";
import Image from "next/image";
import Email from "../images/Email.png";

const Contact = () => {
  return (
    <div className={styles.contact_con}>
      <div className={styles.contact_header}>
        <h1 className={styles.title}>
          <span>#</span>contacts
        </h1>
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
          <Image src={Email} alt="email" height="" width="" />
          <p>mehedibuiyan734@gmail.com</p>
          <p>+88 019108-19923</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
