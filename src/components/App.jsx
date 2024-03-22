import React, { useState } from "react";
import SwipeDrawer from "./SwipeDrawer";
import DisplayNotes from "./notes/Notes";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archive/Archives";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<DisplayNotes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
