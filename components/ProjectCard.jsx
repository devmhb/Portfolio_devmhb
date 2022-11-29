import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import dummyImg from "../images/project-1.jpg";
import { Data } from "./data";

const ProjectCard = () => {
  console.log(Data);
  return (
    <div className={styles.card_con}>
      <div className={styles.card_wrapper}>
        <div className={styles.img_con}>
          <Image src={dummyImg} height="" width="" alt="" />
        </div>
        <div className={styles.card_info}>
          <p className={styles.uses_lan}>HTML SASS JavaScript Next.js</p>
          <h1 className={styles.title}>ChertNodes</h1>
          <p className={styles.desc}>Mincraft server hosting</p>
          <div className={styles.btn_con}>
            <button className={styles.btn}>Live</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
