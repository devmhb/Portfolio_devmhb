import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import styles from "../styles/components/Projects.module.scss";

const Projects = ({ viewAll }) => {
  return (
    <div className={styles.projects_con}>
      <div className={styles.projects_header}>
        <h1>
          <span>#</span>projects
        </h1>
        <Link href="/projects">
          <span>{viewAll}</span>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.projectCard_con}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
