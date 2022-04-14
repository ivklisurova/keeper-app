import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
import CreateArea from "./CreateArea";


function App() {

    const [listNotes, setListNotes] = useState([{
        key: 5,
        title: "Hardware vs. Software",
        content:
            "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }])

    function handleAdd() {
        console.log("added")

    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={handleAdd}/>
            {listNotes.map(note =>
                <Note key={note.key} title={note.title} content={note.content}/>
            )}


            <Footer/>
        </div>
    )
}

export default App;
