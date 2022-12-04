import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import styles from "../styles/components/ProjectsCard.module.scss";

const ProjectsCard = ({ viewAll }) => {
  return (
    <div className={styles.projects_con}>
      <div className={styles.projects_header}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>
            <span>#</span>projects
          </h1>
          <p className={styles.line}></p>
        </div>
        <Link href="/projects">
          <span className={styles.btn}>{viewAll}</span>
        </Link>
      </div>
      <ProjectCard />
    </div>
  );
};

export default ProjectsCard;
