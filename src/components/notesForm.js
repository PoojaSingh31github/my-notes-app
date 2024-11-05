import React, { useState } from "react";
import { db, storage } from "../firebaseConfig"; 
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddNoteForm = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleTitleChange = (e) => setNoteTitle(e.target.value);
  const handleContentChange = (e) => setNoteContent(e.target.value);
  const handleFileChange = (e) => setPdfFile(e.target.files[0]);

  const addNote = async () => {
    try {
      let pdfURL = "";
      if (pdfFile) {
        pdfURL = await uploadPDF(pdfFile);
      }
      await addDoc(collection(db, "notes"), {
        title: noteTitle,
        content: noteContent,
        pdfURL,
        createdAt: new Date(),
      });
      alert("Note added successfully!");
      setNoteTitle("");
      setNoteContent("");
      setPdfFile(null);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const uploadPDF = async (file) => {
    const fileRef = ref(storage, `pdfs/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
  };

  return (
    <div>
      <h2>Add Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={noteTitle}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Note Content"
        value={noteContent}
        onChange={handleContentChange}
      />
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default AddNoteForm;
