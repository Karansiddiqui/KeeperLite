import { React, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../context/DataProvider";
import RestoreIcon from "@mui/icons-material/Restore";

const DeleteNote = ({ deleteNote }) => {
  const { notes, setNotes, deleteNotes, setDeleteNotes } =
    useContext(DataContext);

  function handleRestore(note) {
    const updateNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updateNotes);
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function handleDeleteForever(note) {
    const updateNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updateNotes);
  }

  return (
    <div className="note">
      <h1>{deleteNote.title}</h1>
      <p>{deleteNote.content}</p>
      <button id="delete" onClick={() => handleDeleteForever(deleteNote)}>
        <DeleteIcon />
      </button>
      <button id="archive" onClick={() => handleRestore(deleteNote)}>
        <RestoreIcon />
      </button>
    </div>
  );
};

export default DeleteNote;
