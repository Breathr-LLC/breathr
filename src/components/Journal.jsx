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
    <div className="journal">
        <nav className="journal--nav">
            <Link to="/JournalEntry"><button>+ new entry</button></Link>
            <button>search</button>
        </nav>
        <table className="journal--table">
          <thead className="journal--header">
            <tr>
              <th>date</th>
              <th>journal entries</th>
              <th>mood</th>
            </tr>
          </thead>
          <tbody>
            {
              journals.map(entry => (
                <JournalRow 
                  className="journal--container"
                  key={entry.entry_id} 
                  deleteEntry={deleteEntry}
                  {...entry}
                />
              ))
            }
          </tbody>
        </table>
    </div>
  );
}