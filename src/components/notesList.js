import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Import the db
import { collection, getDocs } from "firebase/firestore";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const querySnapshot = await getDocs(collection(db, "notes"));
      setNotes(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          {note.pdfURL && (
            <a href={note.pdfURL} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
