import React, { useState, useEffect, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
  const [isExtend, setExtend] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const textareaRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".create-note")) {
        setExtend(false);
        if (note.title.trim() !== "" || note.content.trim() !== "") {
          submitNote();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [note, submitNote]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));

    autoResize();
  }

  function autoResize() {
    const textarea = textareaRef.current;
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  const expendTrue = () => {
    setExtend(true);
  };

  const expendFalse = () => {
    setExtend(false);
  };

  function submitNote() {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setExtend(false);
    textareaRef.current.style.height = "auto";
  }

  return (
    <Box component="main">
      <form className="create-note">
        {isExtend && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          ref={textareaRef}
          name="content"
          onClick={expendTrue}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExtend ? 3 : 1}
        />

        {isExtend && (
          <Zoom in={true}>
            {/* button */}
            <Fab
              onClick={() => {
                submitNote();
                expendFalse();
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </Box>
  );
};

export default CreateArea;
