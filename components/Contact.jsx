import React from "react";
import styles from "../styles/components/Contact.module.scss";
import Image from "next/image";
import Email from "../images/Email.png";

const Contact = ({ slashOrHash }) => {
  return (
    <div className={styles.contact_con}>
      <div className={styles.contact_header}>
        <div className={styles.title}>
          <h1>
            <span>{slashOrHash}</span>Contact-me
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
          <Image src={Email} alt="email" height="" width="" />
          <p>mehedibuiyan734@gmail.com</p>
          <p>+88 019108-19923</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
