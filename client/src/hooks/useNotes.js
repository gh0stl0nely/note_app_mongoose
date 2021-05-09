import { useState, useEffect } from 'react';
import Note from '../components/Note';

export default function useNotes(){
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        const newNote = [];
        for(let i = 0; i < 10; i++){
            const noteInfo = {
                id: i,
                content: `I am note number ${i}`,
                oldContent: `I am note number ${i}`,
                isEditMode : false,
            }
            newNote[i] = noteInfo;
        }

        setNotes(newNote);

        return () => {
            
        }
    }, []);

    function createNote(){
        return notes.map(({id, content, isEditMode}) => {
            return   (  
                <div key={id}>
                    <Note id={id} content={content} setNotes={setNotes} isEditMode={isEditMode} notes={notes} />
                    <button onClick={() => {
                        !isEditMode ? allowEdit(id) : saveChange(id);
                    }}>{!isEditMode ? "Edit" : "Click if want to save"}</button>
                    <button disabled={!isEditMode} onClick={() => discardChange(id)}>Discard change</button>
                    <button onClick={() => clickDelete(id)}>Delete</button>
                </div>
            )
        }
        );
    }

    function discardChange(id){
        const newNote = notes.map((note) => {
            if(note.id == id){
                return {
                    ...note,
                    content: note.oldContent,
                    isEditMode: false
                }
            }
            return note;
        }); 
        setNotes(newNote);
    }

    function saveChange(id){
        const newNote = notes.map((note) => {
            if(note.id == id){
                return {
                    ...note,
                    oldContent: note.content,
                    isEditMode: false
                }
            } 
            return note;
        });
        setNotes(newNote);
    }


    function allowEdit(id){
        const newNote = notes.map((note) => {
            if(note.id == id){
                return {
                    ...note,
                    isEditMode: true
                }
            }
            return note;
        });
        setNotes(newNote);
    }

    function clickDelete(idToBeDeleted){
        const newNote = notes.filter(({id}) => {
            return idToBeDeleted != id;
        })  
        setNotes(newNote);
    }

    return {
        createNote,
        discardChange,
        saveChange,
        allowEdit,
        clickDelete,
        setNotes,
        notes
    }
    
}