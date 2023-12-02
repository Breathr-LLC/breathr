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

    // const deleteEntry = () => {
    //         console.log(`in delete entry ${props.entry_id}`)
    //         fetch(`http://localhost:3000/api/journal/deleteEntry/entry-${props.entry_id}`, {
    //             method: "DELETE"
    //         })
    //         // .then(response => response.json())
    //         .catch(err => {
    //             return console.log(err)
    //         })
    // };

    function deleteOnClick() {
        props.deleteEntry(props.entry_id)
    }

    const entryDate = new Date(date).toDateString();

    return (
        <tr className="journalRow-container">
            <td className="journalRow--date">{entryDate}</td>
            <td>{title}</td>
            <td>{category}</td>
            <Link to='/journalentry' state={props}><button>edit</button></Link>
            <button onClick={deleteOnClick} className="journalRow--delete">delete</button>
        </tr>
    )
};