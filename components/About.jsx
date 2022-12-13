import React from "react";
import Link from "next/link";
import styles from "../styles/components/About.module.scss";
import Image from "next/image";
import Me from "../images/jc-gellidon-E3NUmCScugo-unsplash-removebg-preview(1) 1.png";
import Dots from "../images/Dots.png";
import { motion } from "framer-motion";

const About = ({ slashOrHash, readMore }) => {
  return (
    <motion.div
      className={styles.about_con}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.about_header}>
        <div className={styles.title}>
          <h1>
            <span>{slashOrHash}</span>about-me
          </h1>
          <p>who am i ?</p>
        </div>
        <p className={styles.line}></p>
      </div>

      <div className={styles.about_wrapper}>
        <div className={styles.row_left}>
          <div className={styles.info}>
            <p className={styles.para}>Hello, i’m Mehedi!</p>
            <p className={styles.para}>
              I’m a self-taught front-end developer. I can develop responsive
              websites from scratch and raise them into modern user-friendly web
              experiences.
            </p>
            <p className={styles.para}>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I always strive to learn about the
              newest technologies and frameworks.
            </p>
          </div>
          <Link href="/about">{readMore}</Link>
        </div>

        <div className={styles.row_right}>
          <div className={styles.img_con}>
            <Image
              src={Me}
              height=""
              width=""
              alt="me"
              className={styles.author}
            />
          </div>
          <Image
            src={Dots}
            height=""
            width=""
            alt="dots"
            className={styles.dots1}
          />
          <Image
            src={Dots}
            height=""
            width=""
            alt="dots"
            className={styles.dots2}
          />
          <Image
            src={Dots}
            height=""
            width=""
            alt="dots"
            className={styles.dots3}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
