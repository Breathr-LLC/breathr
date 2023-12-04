import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JournalRow from './JournalRow';

export default function Journal() {
  const userID = 1;

  const [journals, setJournals] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:3000/api/journal/getJournalEntries/user-${userID}`)
    .then(response => response.json())
    .then(data => setJournals(data))
  }, []);

  const deleteEntry = (entry_id) => {
    fetch(`http://localhost:3000/api/journal/deleteEntry/entry-${entry_id}`, {
        method: "DELETE"
    })
    .catch(err => {
        return console.log(err)
    })
    .then(() => fetch(`http://localhost:3000/api/journal/getJournalEntries/user-${userID}`)
    .then(response => response.json())
    .then(data => setJournals(data)))
};

  return (
   // Journal component
<div className="journal p-4">
  <nav className="journal--nav flex justify-between mb-4">
    <Link to="/JournalEntry">
      <button className="bg-primary-light hover:bg-surfaceVariant-light text-white hover:text-onSurfaceVariant-light font-bold py-2 px-4 rounded">
        + new entry
      </button>
    </Link>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
      search
    </button>
  </nav>
  <div className="overflow-x-auto">
    <table className="journal--table min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            journal entries
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            mood
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {journals.map(entry => (
          <JournalRow 
            className="journal--container"
            key={entry.entry_id} 
            deleteEntry={deleteEntry}
            {...entry}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}