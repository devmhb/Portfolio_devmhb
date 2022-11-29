import React from "react";
import styles from "../styles/components/Skills.module.scss";
import outline from "../images/logo secondary.svg";
import dots from "../images/Dots.png";
import rect from "../images/Rectangle 24.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.skills_con}>
      <div className={styles.skills_header}>
        <h1 className={styles.title}>
          <span>#</span>skills
        </h1>
        <p className={styles.line}></p>
      </div>
      <div className={styles.skill_con_wrapper}>
        <div className={styles.row_left}>
          <div className={styles.img_con}>
            <Image src={dots} height="" width="" alt="dots" />
            <Image src={outline} height="" width="" alt="dots" />
            <Image src={rect} height="" width="" alt="dots" />
            <Image src={dots} height="" width="" alt="dots" />
          </div>
        </div>
        <div className={styles.row_right}>
          <div className={styles.skill_card}>
            <h2 className={styles.sub_title}>Languages</h2>
            <p>HTML CSS JavaScript</p>
          </div>
          <div className={styles.skill_card}>
            <h2 className={styles.sub_title}>Tools</h2>
            <p> Sass VSCode Git GitHub Font-Awesome Google-Fonts Figma</p>
          </div>
          <div className={styles.skill_card}>
            <h2 className={styles.sub_title}>Libraries</h2>
            <p>React</p>
          </div>
          <div className={styles.skill_card}>
            <h2 className={styles.sub_title}>Frameworks</h2>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
