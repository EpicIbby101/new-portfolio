import React from "react";
import Image from "next/image";
import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card border border-gray-300 rounded-md p-4 shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={500}
        height={500}
        className="rounded-md"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-indigo-600">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-sm mb-4 font-semibold text-gray-600">
          💻 {project.technologies}
        </p>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
        <span className="mx-2 text-gray-500">|</span>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
