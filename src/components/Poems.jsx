import React, { useState } from 'react';

const Poems = () => {
  const [poem, setPoem] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  const handleFindPoem = () => {
    // Placeholder for the logic to find and set a new poem
    setPoem('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={handleFindPoem}
        className="bg-primary-light hover:bg-blue-700 text-onPrimary-light font-bold py-2 px-4 rounded mb-4"
      >
        Find Me a Poem
      </button>
      <div className="border-2 border-outline-dark p-4 rounded w-full md:w-1/2 text-onBackground-light">
        <p>{poem}</p>
      </div>
    </div>
  );
}

export default Poems;
