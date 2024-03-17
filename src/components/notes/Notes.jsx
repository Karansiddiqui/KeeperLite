import React from "react";
import Box from '@mui/material/Box';
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Box component="main" >
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </Box>
  );
};

export default Note;
