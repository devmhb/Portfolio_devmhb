import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import styles from "../styles/components/ProjectsCard.module.scss";
import { motion } from "framer-motion";

const ProjectsCard = ({ viewAll, slashOrHash }) => {
  return (
    <motion.div
      className={styles.projects_con}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.projects_header}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>
            <span>{slashOrHash}</span>projects
          </h1>
          <p className={styles.line}></p>
        </div>
        <Link href="/projects">
          <span className={styles.btn}>{viewAll}</span>
        </Link>
      </div>
      <ProjectCard />
    </motion.div>
  );
};

export default ProjectsCard;
