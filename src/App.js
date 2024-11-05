import AddNoteForm from "./components/notesForm.js";
import NotesList from "./components/notesList.js"

function App() {
  return (
    <div className="App">
      <NotesList/>
      hey note keeps 
      <AddNoteForm/>
    </div>
  );
}

export default App;
