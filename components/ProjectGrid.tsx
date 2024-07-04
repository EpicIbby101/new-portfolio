import React from "react";
import { Project } from "../types/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="w-full ">
        <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
