import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from './DatePicker';
import dayjs from 'dayjs';
import Picker from "emoji-picker-react";

export default function JournalEntry(props) {
    // access data passed in from Link component
    const { state } = useLocation();
    const [chosenEmoji, setChosenEmoji] = useState(null);

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
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <div>
            <form action="" id="entry">
                <div className="entry--header">
                    <DatePicker name="date" id="date" value={dayjs(currDate)}/>
                    <div>
                        {chosenEmoji ? (
                            <span>
                                Your Mood:
                                <img
                                    style={{ width: "30px" }}
                                    src={chosenEmoji.target.src}
                                    alt="Mood emoji"
                                    name="category"
                                    id="category"
                                />
                            </span>
                        ) : (
                            <span>What's your mood?</span>
                            )}
                        {!chosenEmoji && <Picker onEmojiClick={onEmojiClick} />}
                    </div>
                </div>
                <main className="entry--main">
                    <input type="text" placeholder="Title" className="entry-title" name="title" id="title"/>
                    {/* <button>add photo(s)</button> */}
                    <textarea 
                        name="text" 
                        id="text" 
                        cols="30" 
                        rows="10"
                        className="entry-body"
                    />
                    <button type="submit" onClick={createNewEntry}>submit</button>
                </main>
            </form>
        </div>
    );
}
