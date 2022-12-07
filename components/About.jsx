import React from "react";
import styles from "../styles/components/About.module.scss";
import Image from "next/image";
import Me from "../images/jc-gellidon-E3NUmCScugo-unsplash-removebg-preview(1) 1.png";
import Dots from "../images/Dots.png";

const About = ({ slashOrHash }) => {
  return (
    <div className={styles.about_con}>
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
          <button className={styles.btn}>Read more →</button>
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
    </div>
  );
};

export default About;
