import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const name: string = 'Brandon Chui';
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-sm mb-2">
          <a
            href="https://github.com/brandonchui/website"
            className="text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Source)
          </a>
        </p>

        <p className="text-sm">
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        {/* links */}
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/brandonchui"
            className="text-gray-500 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/branchui/"
            className="text-gray-500 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:chuib@usc.edu"
            className="text-gray-500 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
