import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

function NoteApp({ sortBy }) {
  return (
    <div className="note-app">
      <AddNewNote />
      <div className="notes">
        <NoteStatus />
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}

export default NoteApp;
