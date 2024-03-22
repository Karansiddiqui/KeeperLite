import React, { useContext, useEffect } from "react";
import Archive from "./Archive";
import { DataContext } from "../../context/DataProvider";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { setNotes, archivesNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        <Grid container>
          {archivesNotes.map((archiveNote, index) => {
            return (
              <Grid item key={index}>
                <Archive archiveNote={archiveNote} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Archives;
