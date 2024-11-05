import db from "./firebaseConfig";
import storage from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

async function addNote(noteTitle, noteContent) {
  try {
    await addDoc(collection(db, "notes"), {
      title: noteTitle,
      content: noteContent,
      createdAt: new Date(),
    });
    alert("Note added successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function uploadPDF(file) {
  const fileRef = ref(storage, `pdfs/${file.name}`);
  await uploadBytes(fileRef, file);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
}
