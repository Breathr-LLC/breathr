import React from 'react';
import { Link } from 'react-router-dom';
import JournalRow from './JournalRow';

export default function Journal() {
// const journalRows = journalEntryData.map((entry) => (
//   <JournalRow className="journal--container"
//     key={entry.entry_id} 
//     {...entry}
//   />
// ))

let journalRows;

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
              {journalRows}
            </tbody>
          </table>
      </div>
    );
  }