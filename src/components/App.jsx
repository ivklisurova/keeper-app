import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
import CreateArea from "./CreateArea";


function App() {

    const [listNotes, setListNotes] = useState([])

    function handleAdd(event, note) {
        setListNotes((prevItems) => {
            return [...prevItems, note]
        });
        event.preventDefault();
    }


    return (
        <div>
            <Header/>
            <CreateArea onAdd={handleAdd}/>
            {listNotes.map(note =>
                <Note title={note.title} content={note.content}/>
            )}


            <Footer/>
        </div>
    )
}

export default App;
