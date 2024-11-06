// src/components/notes/NotesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteItem from './noteitems';

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users/notes/getNotes', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setNotes(response.data.notes);
        } catch (error) {
            console.error('Error fetching notes', error);
        }
    };

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note._id !== id));
    };

    const handleEdit = (note) => {
        // Logic to handle editing the note (maybe show a modal)
        console.log('Edit note:', note);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
            {notes.map((note) => (
                <NoteItem key={note._id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </div>
    );
};

export default NotesList;
