import React, { useState, useEffect } from "react";
import SwipeDrawer from "./SwipeDrawer";
import DataProvider from "../context/DataProvider";
import Footer from "./Footer";
import CreateArea from "./notes/CreateArea";
import axios from "axios";
import DisplayNotes from "./notes/DisplayNotes";


const App =  () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        ;(async () => {
            const response = await axios.get(`/notes`);
            response.data.map(note => {
                const { id, title, content } = note;
                setNotes(prevNotes => [...prevNotes, { id, title, content }]);
                return null;
            });
        })()
    }, []);


    const addNote = async (newNote) => {
        try {
            const response = await axios.post(`/notes`, newNote);
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
            await axios.delete(`/notes/${id}`);
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
            <SwipeDrawer />
            <CreateArea onAdd={addNote}/>

            <DisplayNotes
             notes={notes}
             deleteNote={deleteNote}
            />

            <Footer />
        </div>
    );
}

export default App;