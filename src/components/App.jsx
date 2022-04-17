import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import shortid from 'shortid';


function App() {

    const [listNotes, setListNotes] = useState([])

    function handleAdd(event, note) {
        setListNotes((prevItems) => {
            return [...prevItems, note]
        });
        event.preventDefault();
    }

    function deleteNote(id) {
        setListNotes((prevItems) => {
            return prevItems.filter((item) => {
                return item.id !== id
            })

        })

    }


    return (
        <div>
            <Header/>
            <CreateArea onAdd={handleAdd}/>
            {listNotes.map(note =>
                <Note key={shortid.generate()} id={note.id} title={note.title} content={note.content}
                      isClicked={deleteNote}/>
            )}


            <Footer/>
        </div>
    )
}

export default App;
