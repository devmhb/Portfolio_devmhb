import React from "react";
import styles from "../styles/components/Hero.module.scss";
import Outline from "../images/logo secondary.svg";
import Dots from "../images/Dots.png";
import heroImg from "../images/hero_img.png";
import comma from "../images/“.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Mehedi-Hasan-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mehedi-Hasan-Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <motion.div
      className={styles.hero_con}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.hero_wrapper}>
        <div className={styles.row_left}>
          <h1 className={styles.title}>
            Mehedi is a<span> front-end </span>
            developer.
          </h1>
          <p className={styles.desc}>
            He crafts responsive websites where technologies meet creativity
          </p>
          <div className={styles.cta_btns}>
            <Link href="/contacts">
              <button className={`${styles.btn} btn btnBorder`}>
                Contact me!
              </button>
            </Link>
            <button
              onClick={onButtonClick}
              className={`${styles.btn} btn btnBorder`}
            >
              Resume
            </button>
          </div>
        </div>

        <div className={styles.row_right}>
          <div className={styles.img_con}>
            <Image
              src={Outline}
              height="200"
              width="200"
              alt="outline"
              className={styles.outline}
            />
            <Image
              src={Dots}
              height=""
              width=""
              alt="dots"
              className={styles.dots}
            />
            <Image
              src={heroImg}
              height=""
              width=""
              alt="author"
              className={styles.author_img}
            />
          </div>
        </div>
      </div>
      <div className={styles.quote_wrapper}>
        <div className={styles.quote}>
          <fieldset>
            <legend>
              <Image src={comma} height="" width="" alt="comma" />
            </legend>
            <p>With great power comes great electricity bill</p>
          </fieldset>
        </div>
        <div className={styles.quote_writer}>
          <fieldset>
            <legend>
              <Image src={comma} height="" width="" alt="comma" />
            </legend>
            <p>-Dr.Who</p>
          </fieldset>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
