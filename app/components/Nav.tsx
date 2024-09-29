import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between py-4">
        {/*left */}
        <div>
          <Link to="/" className="text-lg font-bold">
            Brandon Chui
          </Link>
        </div>
        {/*right*/}
        <div className="space-x-4 flex items-center">
          <Link
            to="/projects"
            className="text-sm p-2 rounded hover:bg-gray-700"
          >
            Projects
          </Link>
          <Link to="/contact" className="text-sm p-2 rounded hover:bg-gray-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
