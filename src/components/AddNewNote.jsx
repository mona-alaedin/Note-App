import { useState } from "react";
import { UseNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = UseNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
    };
    dispatch({ type: "ADD-NOTE", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h1 className="title">Add New Note</h1>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="note title"
          className="text-field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="note description"
          className="text-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
