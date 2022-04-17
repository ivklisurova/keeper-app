import React, {useState} from "react";
import shortid from 'shortid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [note, setNote] = useState({});
    const [isExpanded, setExpanded] = useState(false)


    function handleNoteInput(event) {
        const userInput = event.target.value
        const field = event.target.name

        if (field === "title") {
            setNoteTitle(userInput)

        } else if (field === "content") {
            setNoteBody(userInput)
        }

        let newNote = {
            id: shortid.generate(),
            title: noteTitle,
            content: noteBody
        }

        setNote(newNote)

    }

    function handleArea() {
        setExpanded(!isExpanded);
    }


    return (<div>
        <form className="create-note">
            {isExpanded && <input name="title" placeholder="Title" onChange={handleNoteInput} value={noteTitle}/>}
            <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleNoteInput}
                      value={noteBody} onClick={handleArea}/>
            {isExpanded && <Zoom in={true}>
                <Fab type="submit" onClick={(event) => {
                    props.onAdd(event, note)
                    setNoteTitle("")
                    setNoteBody("")
                    setNote({})
                }}>
                    <AddIcon onClick={handleArea}/>
                </Fab>
            </Zoom>}

        </form>
    </div>);
}

export default CreateArea;
