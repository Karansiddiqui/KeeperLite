import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExtend, setExtend] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expend() {
    setExtend(true);
  }

  return (
    <div>
      <form className="create-note">

        {isExtend && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}

        <textarea
          name="content"
          onClick={expend}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExtend ? 3 : 1}
        />

        {isExtend && <Zoom in="true">
        {/* button */}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>}


      </form>
    </div>
  );
}

export default CreateArea;
