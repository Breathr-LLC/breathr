import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from './DatePicker';
import dayjs from 'dayjs';
import Picker from "emoji-picker-react";

export default function JournalEntry(props) {
    // access data passed in from Link component
    const { state } = useLocation();
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const navigate = useNavigate();

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    let currDate = (new Date()).toLocaleDateString('en-US').toString();

    const userID = 1;

    function createNewEntry() {
        fetch(`http://localhost:3000/api/journal/addEntry`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                title: document.querySelector("#title").value,
                category: chosenEmoji.target.src,
                text: document.querySelector("#text").value,
                date: currDate,
                user_id: userID
            })
          })
          .then(
            navigate("/journal")
          )
        .catch(err => {
            console.log(err)
        });
      
    };

    return (
       // JournalEntry component
<div className="entry p-4">
  <form action="" id="entry">
    <div className="entry--header flex justify-between items-center mb-4">
      <DatePicker name="date" id="date" value={dayjs(currDate)}/>
      <div className="emoji-picker">
        {chosenEmoji ? (
          <span className="flex items-center">
            Your Mood:
            <img
              className="w-8 h-8"
              src={chosenEmoji.target.src}
              alt="Mood emoji"
              name="category"
              id="category"
            />
          </span>
        ) : (
          <span>What's your mood?</span>
        )}
        {!chosenEmoji && <Picker onEmojiClick={onEmojiClick} category={['smileys_people']} />}
      </div>
    </div>
    <main className="entry--main space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="entry-title form-input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        name="title"
        id="title"
      />
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        className="entry-body form-textarea mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <button type="button" onClick={createNewEntry} className="bg-primary-light hover:bg-primaryContainer-light hover:text-onPrimaryContainer-light text-white font-bold py-2 px-4 rounded">
        submit
      </button>
    </main>
  </form>
</div>

    );
}
