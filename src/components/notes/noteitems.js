import React from 'react';
import axios from 'axios';

const NoteItem = ({ note, onDelete, onEdit }) => {
    const handleDelete = async () => {
        try {
            await axios.delete('http://localhost:4000/api/notes/deleteNotes', {
                data: { noteId: note._id },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            onDelete(note._id);
        } catch (error) {
            console.error('Error deleting note', error);
        }
    };

    const handleEdit = () => {
        // Open a modal or navigate to an edit page
        onEdit(note);
    };

    return (
        <div className="border rounded p-4 mb-4">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
            {/* Display PDF and images if available */}
            <div>
                {note.pdf && <a href={note.pdf} target="_blank" rel="noopener noreferrer">View PDF</a>}
                {note.images && note.images.map((image, index) => (
                    <img key={index} src={image} alt={`Note ${index}`} className="w-32 h-32" />
                ))}
            </div>
            <button onClick={handleEdit} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
            <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
    );
};

export default NoteItem;
