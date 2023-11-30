import React, { useState } from "react";
import DatePicker from './DatePicker';
import Picker from "emoji-picker-react";
import journalCSS from '../journalCSS.css';

export default function JournalEntry(props) {

    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            <form action="">
                <div className="entry--header">
                    <DatePicker />
                    <div>
                        {chosenEmoji ? (
                            <span>
                                Your Mood:
                                <img
                                    style={{ width: "30px" }}
                                    src={chosenEmoji.target.src}
                                    alt="Mood emoji"
                                />
                            </span>
                        ) : (
                            <span>What's your mood?</span>
                            )}
                        {!chosenEmoji && <Picker onEmojiClick={onEmojiClick} />}
                    </div>
                </div>
                <main className="entry--main">
                    <input type="text" placeholder="Title" className="entry-title"/>
                    {/* <button>add photo(s)</button> */}
                    <textarea 
                        name="journalBody" 
                        id="journalBody" 
                        cols="30" 
                        rows="10"
                        className="entry-body"
                    />
                    <button>submit</button>
                </main>
            </form>
        </div>
    );
}


 
