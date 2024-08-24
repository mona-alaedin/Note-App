import { UseNotes } from "../context/NotesContext";

function NoteHeader({ sortBy, onSort }) {
  const notes = UseNotes();

  return (
    <div className="note-header">
      <h2>My Notes : ({notes.length})</h2>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">latest</option>
        <option value="earliest">earliest</option>
      </select>
    </div>
  );
}

export default NoteHeader;
