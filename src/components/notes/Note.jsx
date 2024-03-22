import { React, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../context/DataProvider";
import ArchiveIcon from "@mui/icons-material/Archive";

const Note = ({ note }) => {
  const { notes, setNotes, setArchivesNotes, setDeleteNotes } =
    useContext(DataContext);

  function handleArchive(note) {
    const updateNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updateNotes);
    setArchivesNotes((prevNotes) => [...prevNotes, note]);
  }

  function handleDelete(note) {
    const updateNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updateNotes);
    setDeleteNotes((prevNotes) => [...prevNotes, note]);
  }

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button id="archive" onClick={() => handleArchive(note)}>
        <ArchiveIcon />
      </button>
      <button id="delete" onClick={() => handleDelete(note)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
