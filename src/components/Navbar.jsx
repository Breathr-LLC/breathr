import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-secondary-light text-onSecondary-light p-4 shadow-md font-red-hat-display">
    <ul className="flex space-x-4 justify-end">
      <li className="hover:text-gray-300 cursor-pointer">Logout</li>
    </ul>
  </nav>
  );
};

export default Navbar;