import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useReducer, useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function reducerFn(notes, { type, payload }) {
  switch (type) {
    case "ADD-NOTE":
      return [...notes, payload];
    case "DELETE-NOTE":
      return notes.filter((note) => note.id !== payload);
    case "COMPLETE-NOTE":
      return notes.map((n) => {
        return n.id === payload ? { ...n, completed: !n.completed } : n;
      });
    default:
      throw new Error("unknown error :" + type);
  }
}

function App() {
  const [sortBy, setSortBy] = useState("");
  const [notes, dispatch] = useReducer(reducerFn, []);

  const handleAddNote = (newNote) => {
    dispatch({ type: "ADD-NOTE", payload: newNote });
  };
  const handleDeleteNote = (noteId) => {
    dispatch({ type: "DELETE-NOTE", payload: noteId });
  };
  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "COMPLETE-NOTE", payload: noteId });
  };

  return (
    <>
      <div className="container">
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />

        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="notes">
            <NoteStatus notes={notes} />
            <NoteList
              notes={notes}
              sortBy={sortBy}
              onDelete={handleDeleteNote}
              onComplete={handleCompleteNote}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
