import React from 'react';
import GithubLogo from '../assets/Githublogo.png'
import Email from '../assets/email.png'
import LinkedInLogo from '../assets/linkedin.png'
import PDF from '../assets/pdf.png'

const Contact = () => {
  const contactDetails = [
    {
      title: 'Visit my LinkedIn',
      logo: LinkedInLogo, // Replace with your actual logo image
      link: 'https://www.linkedin.com/in/your-linkedin-profile',
    },
    {
      title: 'Visit my GitHub',
      logo: GithubLogo, // Replace with your actual logo image
      link: 'https://github.com/your-github-username',
    },
    {
      title: 'Send me an Email',
      logo: Email, // Replace with your actual logo image
      link: 'mailto:your@email.com',
    },
    {
        title: 'Download my CV',
        logo: PDF, // Replace with your actual logo image
        link: 'mailto:your@email.com',
      },
  ];

  return (
    <div className="p-4 mb-8">
      <h2 className="text-4xl md:text-4xl text-center pb-3 mb-5 font-bold dark:text-white underline">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactDetails.map((contact, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <a href={contact.link} target="_blank" rel="noreferrer">
              <img
                src={contact.logo}
                alt={contact.title}
                className="w-24 h-24 mx-auto mb-2"
              />
            </a>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {contact.title}
            </h3>
            <a
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-center mt-2 block"
            >
              {contact.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
