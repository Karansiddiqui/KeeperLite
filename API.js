import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.port || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors());

let notes = [
];

console.log(notes.length);

let lastId = 0;

app.get("/notes", (req, res) => {
  try {
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/notes", (req, res) => {
  const { id, title, content } = req.body;
  const newNote = {
    id: lastId + 1,
    title: title,
    content: content
  };
  lastId++;
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.delete("/notes/:id" , (req, res) => {
  const id = req.params.id;
  if (id === -1) return res.status(404).json({ message: "Note not found" });

  notes.splice(id, 1);
  res.json({ message: "Note deleted" });
})

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}/notes`);
});
