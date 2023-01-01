import React from "react";
import styles from "../styles/components/Skills.module.scss";
import outline from "../images/logo secondary.svg";
import dots from "../images/Dots.png";
import rect from "../images/Rectangle 24.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className={styles.skills_con}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.skills_header}>
        <h1 className={styles.title}>
          <span>#</span>skills
        </h1>
        <p className={styles.line}></p>
      </div>
      <div className={styles.skill_con_wrapper}>
        <div className={styles.row_left}>
          <div className={styles.img_con}>
            <Image
              src={dots}
              height=""
              width=""
              alt="dots"
              className={styles.dots1}
            />
            <Image
              src={outline}
              height="150"
              width="150"
              alt="outline"
              className={styles.outline}
            />
            <Image
              src={rect}
              height=""
              width=""
              alt="rect"
              className={styles.rect}
            />
            <Image
              src={dots}
              height=""
              width=""
              alt="dots"
              className={styles.dots2}
            />
          </div>
        </div>
        <div className={styles.row_right}>
          <div>
            <div className={styles.skill_card}>
              <h2 className={styles.sub_title}>Languages</h2>
              <p>HTML CSS JavaScript</p>
            </div>
            <div className={styles.skill_card}>
              <h2 className={styles.sub_title}>Tools</h2>
              <p> Sass VSCode Git GitHub Font-Awesome Google-Fonts Figma</p>
            </div>
          </div>

          <div>
            <div className={styles.skill_card}>
              <h2 className={styles.sub_title}>Libraries</h2>
              <p>React</p>
            </div>
            <div className={styles.skill_card}>
              <h2 className={styles.sub_title}>Frameworks</h2>
              <p>Tailwind Next.js</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
