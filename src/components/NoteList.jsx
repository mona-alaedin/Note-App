import { FaTrash } from "react-icons/fa";

function NoteList({ notes, onDelete, onComplete, sortBy }) {
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onComplete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <FaTrash className="icon" onClick={() => onDelete(note.id)} />
          <input
            type="checkbox"
            value={note.id}
            onChange={onComplete}
            checked={note.completed}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
