import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";


const API_URL = "http://localhost:4000";

function App() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        ;(async () => {
            const response = await axios.get(`${API_URL}/notes`);
            response.data.map(note => {
                const { id, title, content } = note;
                setNotes(prevNotes => [...prevNotes, { id, title, content }]);
                return null;
            });
        })()
    }, []);


    const addNote = async (newNote) => {
        try {
            const response = await axios.post(`${API_URL}/notes`, newNote);
            setNotes(prevNotes => {
                return [...prevNotes, newNote];
            });
            console.log(response);
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await axios.delete(`${API_URL}/notes/${id}`);
            setNotes((prevNotes) => {
                return (prevNotes.filter((noteItem, index) => {
                    return index !== id;
                }))
            })
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };


    
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            
            <div className="noteContainer">
            {notes.map((noteItem, index) => {
                return (
                <Note
                    key={index}
                    id={index}
                    title= {noteItem.title}
                    content= {noteItem.content}
                    onDelete= {deleteNote}
                />)
            })}
            </div>
            <Footer />
        </div>
    );
}

export default App;