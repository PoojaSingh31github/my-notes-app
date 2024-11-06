// src/components/notes/HomePage.js
import React from 'react';
import AddNote from './addnotes';
import NotesList from './getnotes';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Notes Management</h1>
            <AddNote />
            <NotesList />

        </div>
    );
};

export default HomePage;
