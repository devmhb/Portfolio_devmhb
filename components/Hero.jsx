import React from "react";
import styles from "../styles/components/Hero.module.scss";
import Outline from "../images/logo secondary.svg";
import Dots from "../images/Dots.png";
import heroImg from "../images/hero_img.png";
import comma from "../images/“.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero_con}>
      <div className={styles.hero_wrapper}>
        <div className={styles.row_left}>
          <h1 className={styles.title}>
            Mehedi is <span> front-end </span>
            developer
          </h1>
          <p className={styles.desc}>
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className={styles.btn}>Contact me!</button>
        </div>

        <div className={styles.row_right}>
          <div className={styles.img_con}>
            <Image
              src={Outline}
              height="100"
              width="100"
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
            <Image src={heroImg} height="" width="" alt="author" />
          </div>
        </div>
      </div>
      <div className={styles.quote_wrapper}>
        <div className={styles.quote}>
          <fieldset>
            <legend>
              <Image src={comma} height="" width="" />
            </legend>
            <p>With great power comes great electricity bill</p>
          </fieldset>
        </div>
        <div className={styles.quote_writer}>
          <fieldset>
            <legend>
              <Image src={comma} height="" width="" />
            </legend>
            <p>-Dr.Who</p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Hero;
