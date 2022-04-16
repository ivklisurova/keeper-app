import React, {useState} from "react";

function CreateArea(props) {

    const [noteTitle, setNoteTitle] = useState("")
    const [noteBody, setNoteBody] = useState("")
    const [note, setNote] = useState({})


    function handleNoteInput(event) {
        const userInput = event.target.value
        const field = event.target.name

        if (field === "title") {
            setNoteTitle(userInput)

        } else if (field === "content") {
            setNoteBody(userInput)
        }

        let newNote = {
            title: noteTitle, content: noteBody
        }

        setNote(newNote)

    }


    return (<div>
            <form>
                <input name="title" placeholder="Title" onChange={handleNoteInput} value={noteTitle}/>
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleNoteInput}
                          value={noteBody}/>
                <button type="submit" onClick={(event) => {
                    props.onAdd(event, note)
                    setNoteTitle("")
                    setNoteBody("")
                    setNote({})
                }}>Add
                </button>
            </form>
        </div>);
}

export default CreateArea;
