import React, { useContext } from "react";
import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DisplayNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        <Grid container>
          {deleteNotes.map((deleteNote, index) => {
            return (
              <Grid item key={index}>
                <DeleteNote deleteNote={deleteNote} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default DisplayNotes;
