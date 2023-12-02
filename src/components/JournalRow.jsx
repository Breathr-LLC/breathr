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
      // JournalRow component
<tr className="journalRow-container bg-surface-light hover:bg-surfaceVariant-light">
  <td className="px-6 py-4 whitespace-nowrap">{entryDate}</td>
  <td className="px-6 py-4 whitespace-nowrap">{title}</td>
  <td className="px-6 py-4 whitespace-nowrap">
    <img
      className="w-8 h-8"
      src={category}
      alt="Mood emoji"
    />
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <Link to='/journalentry' state={props}>
      <button className="text-indigo-600 hover:text-indigo-900">edit</button>
    </Link>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <button onClick={deleteOnClick} className="text-error-light hover:text-error-dark">delete</button>
  </td>
</tr>

    )
};