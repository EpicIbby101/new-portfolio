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
      description: 'Calculate best times for people from two different timezones to communicate, without disrupting sleep schedules',
      image: Earth,
      link: 'https://timezoneapp-sepia.vercel.app/',
      link2: 'https://github.com/EpicIbby101/timezoneapp'

    },
    {
      title: 'Fitness App',
      description: 'Discover a large variety of fitness exercises',
      image: Fitness,
      link: 'https://yeahbuddeh-2b8a1.web.app/',
      link2: 'https://github.com/EpicIbby101/gymApp'

    },
    {
      title: 'Social Media App',
      description: 'A Pinterest like app social media app',
      image: Social,
      link: 'https://sharebee-374512.web.app/login',
      link2: 'https://github.com/EpicIbby101/Social-media-app'

    },
    {
      title: 'Recipe App',
      description: 'An app that has a variety of tasty recipes to try',
      image: Recipe,
      link: 'https://example.com/project4',
      link2: 'https://github.com/EpicIbby101/recipe-app'

    },
    {
      title: 'Weather App',
      description: 'A simple weather forecast tool',
      image: Weather,
      link: 'https://weather-app-vue-faea0.web.app/',
      link2: 'https://github.com/EpicIbby101/Weather-app-vue'
    },

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
            <div className="flex justify-center mt-2"> 
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline inline-block mr-6"
              >
                View Project
              </a>
              <a
                href={project.link2}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline inline-block" 
              >
                View Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="h-1 bg-gray-700 w-full opacity-70 mt-10 mb-9" />
  </div>
);



};

export default Projects;
