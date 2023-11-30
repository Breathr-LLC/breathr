import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-48 h-full bg-surfaceVariant-light text-onSurfaceVariant-light p-4 fixed font-red-hat-display border-r-2 border-outline-light border-opacity-50">
      <ul className="flex flex-col space-y-4">
        <a className="hover:bg-surface-light p-2 hover:text-onSurface-light p-2 rounded cursor-pointer" href="/poems">Poems</a>
        <a className="hover:bg-surface-light p-2 hover:text-onSurface-light rounded cursor-pointer" href="journal">Journal</a>
        <a className="hover:bg-surface-light p-2 hover:text-onSurface-light rounded cursor-pointer" href="coloring-book">Coloring Book</a>
      </ul>
    </aside>
  );
}

export default Sidebar;
