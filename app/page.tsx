// app/notes/page.tsx
import React from 'react';
import Link from 'next/link';
import { notes } from './data/notes';

const NotesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">備忘録一覧</h1>
      <div className="space-y-4">
        {notes.map(note => (
          <div key={note.id}>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
              <h2 className="text-2xl font-semibold">{note.title}</h2>
              <p className="text-gray-700">{note.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
