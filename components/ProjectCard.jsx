import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import { data } from "./data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTentArrowLeftRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <div className={styles.card_con}>
      {data.map((data) => (
        <div className={styles.card_wrapper}>
          <div className={styles.img_con}>
            <Image src={data?.image} height="" width="" alt="" />
          </div>
          <div className={styles.card_info}>
            <p className={styles.uses_lan}>{data?.uses}</p>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data?.subTitle}</p>
            <div className={styles.btn_con}>
              <Link href={data?.link} target="_blank">
                <button className={styles.btn}>
                  Live
                  <FontAwesomeIcon icon={faTentArrowLeftRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
