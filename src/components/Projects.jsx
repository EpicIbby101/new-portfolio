import React from 'react';
import Earth from '../assets/earth.jpg';
import Fitness from '../assets/fitness.jpg';
import Social from '../assets/social-media.jpg';
import Recipe from '../assets/recipe.jpg';
import Weather from '../assets/weather.png';

const Projects = () => {
  const projectList = [
    {
      title: 'Timezone App',
      description: 'A short description of Project 1.',
      image: Earth,
      link: 'https://example.com/project1',
    },
    {
      title: 'Fitness App',
      description: 'A short description of Project 2.',
      image: Fitness,
      link: 'https://example.com/project2',
    },
    {
      title: 'Social Media App',
      description: 'A short description of Project 3.',
      image: Social,
      link: 'https://example.com/project3',
    },
    {
      title: 'Recipe App',
      description: 'A short description of Project 4.',
      image: Recipe,
      link: 'https://example.com/project4',
    },
    {
      title: 'Weather App',
      description: 'A short description of Project 5.',
      image: Weather,
      link: 'https://example.com/project5',
    },
    // Add more project items here
];

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl md:text-4xl text-center pb-3 mb-9 font-bold dark:text-white underline">
        My Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-900 rounded-none p-4 shadow-md transition-transform hover:scale-105 ${
              index === 0 ? 'md:col-span-2' : ''
            }`}
            style={{ borderBottom: '4px solid #FFA500' }}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="relative h-64 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold dark:text-white">
                {project.title}
              </h3>
              <p className="dark:text-white mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline mt-2 block"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
