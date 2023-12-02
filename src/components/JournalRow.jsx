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

    function deleteOnClick() {
        props.deleteEntry(entry_id)
    }

    const entryDate = new Date(date).toDateString();

    return (
        <tr className="journalRow-container">
            <td className="journalRow--date">{entryDate}</td>
            <td>{title}</td>
            <td>
                <img
                    style={{ width: "30px" }}
                    src={category}
                    alt="Mood emoji"
                    name="category"
                    id="category"
                />
            </td>
            <Link to='/journalentry' state={props}><button>edit</button></Link>
            <button onClick={deleteOnClick} className="journalRow--delete">delete</button>
        </tr>
    )
};