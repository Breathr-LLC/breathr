import React from 'react';
import { Link } from 'react-router-dom';

export default function JournalRow(props) {
    const {
        entry_id,
        date,
        title,
        text,
        category
    } = props;

    const deleteEntry = () => {
        //delete entry_id
        return entry_id;
    };

    const entryDate = new Date(date).toDateString();

    return (
        <tr className="journalRow-container">
            <td className="journalRow--date">{entryDate}</td>
            <td>{title}</td>
            <td>{category}</td>
            <Link to="/JournalEntry"><button>edit</button></Link>
            <button onClick={deleteEntry} className="journalRow--delete">x</button>
        </tr>
    )
};