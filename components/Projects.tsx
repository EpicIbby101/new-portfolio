import React from "react";
import { Project } from "@/types/types";
import ProjectGrid from "./ProjectGrid";
import Compliments from "@/public/compliments.png";
import Socials from "@/public/socials.png"
import Recipe from "@/public/recipes.png"

const grid: Project[] = [
  {
    id: 1,
    title: "Compliment Generator",
    description:
      "Made a compliment generator for my girlfriend. Each day has a different set of compliments. Background changes depending on the current time and weather.",
    technologies: "Next.js, Tailwind CSS, Vercel",
    imageUrl: Compliments,
    projectUrl: "https://compliment-generator-seven.vercel.app/",
    githubUrl: "https://github.com/EpicIbby101/compliment-generator",
  },
  {
    id: 2,
    title: "Sharebee Social Media",
    description:
      "A Pinterest-like media sharing platform, users can login and post, comment and save their favourite images and videos. Complete with user profile and categories.",
    technologies: "React, Firebase, Sanity.io",
    imageUrl: Socials,
    projectUrl: "https://sharebee-374512.web.app/login",
    githubUrl: "https://github.com/EpicIbby101/Social-media-app",

  },
  {
    id: 3,
    title: "Recipe Book App",
    description:
      "A full-stack, simple recipe app that uses an API to pull recipes from a server. Features detailed recipe pages that displays ingredients and instructions as well as recommendations.",
    technologies: "React, Redux, Firebase",
    imageUrl: Recipe,
    projectUrl: "https://recipe-app-c0c25.web.app/",
    githubUrl: "https://github.com/EpicIbby101/recipe-app",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <section className="bg-base-200 overflow-hidden">
        <div className="py-24 px-8 max-w-5xl mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-0 md:mb-0 underline">
              My Recent Projects
            </h2>
          </div>
          <div className="flex justify-center">
            <ProjectGrid projects={grid} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
