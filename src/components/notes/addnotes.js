import React, { useState } from "react";
import axios from "axios";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdf, setPdf] = useState(null);
  const [images, setImages] = useState([]);

  const handlePdfChange = (e) => setPdf(e.target.files[0]);
  const handleImageChange = (e) => setImages([...e.target.files]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("pdf", pdf);
    images.forEach((image, index) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/notes/addNotes",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
      alert("Note added successfully!");
    } catch (error) {
      console.error("Error uploading note:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mb-4 w-full"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border p-2 mb-4 w-full"
        required
      />
      <input type="file" accept=".pdf" onChange={handlePdfChange} required />
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
