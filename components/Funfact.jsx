import React from "react";
import styles from "../styles/components/Funfact.module.scss";
import outline from "../images/logo secondary.svg";
import Image from "next/image";

const Funfact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>#</span>my-fun-facts
        </h1>
        <p className={styles.line}></p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.items}>
          <p className={styles.item}>I like winter more than summer</p>
          <p className={styles.item}>I often bike with my friends</p>
          <p className={styles.item}>I like pizza and pasta</p>
          <p className={styles.item}>My favorite movie is The Green Mile</p>
        </div>
        <div className={styles.img_con}>
          <Image src={outline} alt="outline" height="" width="" />
        </div>
      </div>
    </div>
  );
};

export default Funfact;
