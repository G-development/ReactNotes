import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const charLimit = 200;

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSave = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteTitle("");
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="1"
        cols="10"
        maxLength="30"
        placeholder="Name your thoughts"
        onChange={handleTitle}
        value={noteTitle}
      ></textarea>
      <textarea
        rows="8"
        cols="10"
        maxLength="200"
        placeholder="What's on your mind?"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save-btn" onClick={handleSave}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default AddNote;
