import React from "react";
import Notes from "./Notes";
const DisplayNotes = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default DisplayNotes;
