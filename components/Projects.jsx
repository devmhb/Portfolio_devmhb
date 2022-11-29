import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/components/Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.projects_con}>
      <div className={styles.projects_header}>
        <h1>
          <span>#</span>projects
        </h1>
        <button className={styles.btn}>View all ⇢</button>
      </div>
      <div className={styles.projectCard_con}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
