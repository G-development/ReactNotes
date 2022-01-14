import "./App.css";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";

const App = () => {
  const [searchText, setSearchNote] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "First",
      text: "1st Note!",
      date: "01/01/2022",
    },
    {
      id: nanoid(),
      title: "Second",
      text: "2nd Note!",
      date: "02/01/2022",
    },
    {
      id: nanoid(),
      title: "Third",
      text: "3rd Note!",
      date: "03/01/2022",
    },
    {
      id: nanoid(),
      title: "Fourth",
      text: "4th Note!",
      date: "04/01/2022",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        {/* <h1 className="title">🖊️ React Notes App</h1> */}
        <Header handleDarkMode={setDarkMode} />
        <SearchBar handleSearchNote={setSearchNote} />
        <NotesList
          notes={notes.filter(
            (note) =>
              note.text.toLowerCase().includes(searchText) ||
              note.title.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
