import React, { useState } from "react";
import DatePicker from './DatePicker';
import Picker from "emoji-picker-react";

export default function JournalEntry(props) {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    // const {
    //     entry_id,
    //     date,
    //     title,
    //     text,
    //     category
    // } = props;

    // journalsModel.addEntry = async (title, category, text, date, user_id) => {
    //     const args = [title, category, text, date, user_id];
    //     const sql = 'INSERT INTO journal_entries (title, category, text, date, user_id) ' +
    //                 'VALUES ($1, $2, $3, $4, $5)';
    //     return await query(sql, args);
    //   };
    const userID = 1;

    function createNewEntry() {
        console.log("in createNewEntry")
        fetch(`localhost:3000/api/journal/addEntry`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                title: "test title",
                category: "test title",
                text: "test title",
                date: "test title",
                user_id: 1
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
                    <DatePicker name="date" id="date" />
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
