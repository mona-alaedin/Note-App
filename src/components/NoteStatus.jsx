import { UseNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteStatus() {
  const notes = UseNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes) return <Message text="there is not note...!" />;

  return (
    <ul className="note-status">
      <li>
        All :<span>{allNotes}</span>
      </li>
      <li>
        Completed :<span>{completedNotes}</span>
      </li>
      <li>
        Uncompleted :<span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
