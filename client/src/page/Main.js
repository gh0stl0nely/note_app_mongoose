import React, { useState, useEffect } from 'react';
import useNotes from '../hooks/useNotes';
import Note from '../components/Note';

export default function MainPage(){
    const {
        createNote,
        setNotes,
        notes,
    }= useNotes();
    const [input, setInput] = useState("");

    function submitNote(e){
        if(e.key == "Enter" && input.trim() != ""){
            const newNotes = [...notes];
            newNotes.push({
                id: Math.random(),
                content: input,
                oldContent: input,
                isEditMode: false
            })
            setNotes(newNotes)
            setInput("");
        }
        e.preventDefault();
    }

    function onChange(e){
        setInput(e.target.value);
        e.preventDefault();
    }

    return (
        <div>   
            <input value={input} onChange={onChange} onKeyUp={submitNote}/>
            {createNote()}
        </div>
    )
}