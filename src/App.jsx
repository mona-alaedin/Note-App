import "./App.css";
import { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import NoteApp from "./components/NoteApp";
import AppProviders from "./providers/AppProviders";

function App() {
  const [sortBy, setSortBy] = useState("");

  return (
    <AppProviders>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
