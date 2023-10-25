import React from 'react';
import ProfileImage from '../assets/Picsart2.png'

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center pt-24 pb-0">
      <h1 className="text-5xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white mt-7 z-10">
        Kevin Grittner
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium z-10">
        Software Engineer & Web Developer
      </p>
      <img
        src={ProfileImage}
        alt="Kevin"
        className="rounded-full w-72 mt-3 mb-7 z-10"
      />
      <p className="text-sm max-w-xl mb-6 font-bold z-10">
        Combining Creativity with Technical Expertise to Build Innovative Apps
        <br />-<br />
        My goal as a developer is to build applications that are intuitive,
        responsive, and user-friendly. I believe that technology has the power
        to transform industries and improve people's lives, and I'm excited to
        be a part of that transformation as a full-stack developer.
        <br />
      </p>

      <h2 className="text-4xl md:text-4xl mb-1 md:mb-3 font-bold dark:text-white mt-7 underline">
        Main Skills
      </h2>
      <h4 className="text-3xl md:text-3xl mb-1 md:mb-3 font-bold dark:text-white mt-7">
        💻 Technologies 💻
      </h4>
      <p className="flex space-x-3">
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />{" "}
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="bg-white rounded-full mt-1.5"
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width="45"
            height="45"
          />{" "}
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
            alt="vuejs"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="40"
            height="40"
          />{" "}
        </a>
      </p>
      <br />-<br />
      <h4 className="text-3xl md:text-3xl mb-1 md:mb-3 font-bold dark:text-white mt-7">
        ⚒️ Tools ⚒️
      </h4>
      <p className="flex space-x-3">
        <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
            alt="blender"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
            alt="docker"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
            alt="photoshop"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://unity.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
            alt="unity"
            width="40"
            height="40"
          />{" "}
        </a>
      </p>

      <div className="h-1 bg-gray-700 w-full opacity-70 mt-9 mb-5" />
    </div>
  );
};

export default Profile;
