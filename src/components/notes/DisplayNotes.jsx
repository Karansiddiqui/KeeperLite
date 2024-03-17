import React from "react";
import Notes from "./Notes"; // Assuming Notes component is imported correctly
import Box from "@mui/material/Box";
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
