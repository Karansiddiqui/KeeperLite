import { React, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../context/DataProvider";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

const Archive = ({ archiveNote }) => {
  const { notes, setNotes, archivesNotes, setArchivesNotes, setDeleteNotes } =
    useContext(DataContext);

  function handleUnarchive(archive) {
    const updateNotes = archivesNotes.filter((data) => data.id !== archive.id);
    setArchivesNotes(updateNotes);
    setNotes((prevNotes) => [...prevNotes, archive]);
  }

  function handleDelete(archive) {
    const updateNotes = archivesNotes.filter((data) => data.id !== archive.id);
    setArchivesNotes(updateNotes);
    setDeleteNotes((prevNotes) => [...prevNotes, archive]);
  }

  return (
    <div className="note">
      <h1>{archiveNote.title}</h1>
      <p>{archiveNote.content}</p>
      <button id="archive" onClick={() => handleUnarchive(archiveNote)}>
        <UnarchiveIcon />
      </button>
      <button id="delete" onClick={() => handleDelete(archiveNote)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Archive;
