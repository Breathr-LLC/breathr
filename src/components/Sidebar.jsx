import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-surfaceVariant-light text-onSurfaceVariant-light p-4 fixed">
      <ul className="flex flex-col space-y-4">
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer" href="/logout">Logout</a>
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer" href="/poems">Poems</a>
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer" href="journal">Journal</a>
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer" href="coloring-book">Coloring Book</a>
      </ul>
    </aside>
  );
}

export default Sidebar;
