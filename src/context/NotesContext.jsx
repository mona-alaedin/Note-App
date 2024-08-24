import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

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

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(reducerFn, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function UseNotes() {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes was used outside of component!!");
  return context;
}
export function UseNotesDispatch() {
  const context = useContext(NotesDispatchContext);
  if (!context) throw new Error("useNotes was used outside of component!!");
  return context;
}
