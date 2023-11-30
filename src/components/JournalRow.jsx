import React from 'react';

export default function JournalRow(props) {
    const {
        entry_id,
        date,
        title,
        body,
        mood
    } = props;

    const deleteEntry = () => {
        //delete entry_id
        return entry_id;
    };

    const entryDate = new Date(date).toDateString();

    return (
        <tr className="journalRow-container">
            <td className="journalRow--date">{entryDate}</td>
            {/* <td className="journal--body">{body}</td> */}
            <td>{title}</td>
            <td>{mood}</td>
            <button onClick={deleteEntry} className="journalRow--delete">x</button>
        </tr>
    )
};