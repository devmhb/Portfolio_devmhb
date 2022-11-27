import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
// import Image from "next/image";
import { Data } from "./data";

const ProjectCard = () => {
  console.log(Data);
  return (
    <div className={styles.card_con}>
      <div className={styles.img_con}>{/* <Image /> */}</div>
    </div>
  );
};

export default ProjectCard;
