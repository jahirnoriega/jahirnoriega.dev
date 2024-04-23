/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { ProjectCard } from "../components/ProjectCard";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { projects_info } from "../data/projects";

export function loader() {
  return projects_info;
}

function Projects() {
  const projectsData = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-midnight dark:text-whiter mt-12"
    >
      <h1 className="text-4xl font-extrabold my-3">Projects.</h1>
      <p className="text-sm my-3">
        Here are some of the projects I've worked on.
      </p>
      <div className="">
        {projectsData.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
