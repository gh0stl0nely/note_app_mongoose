import { useState, useEffect , useCallback} from 'react';
import _ from 'lodash';

export default function Note({notes, setNotes, id, content, isEditMode}){
    const [value, setValue] = useState(content);

    useEffect(() => {
        setValue(content);
    },[content])

    useEffect(() => {
        const updateStateTimer = setTimeout(debouncedSave, 200);

        return () => clearTimeout(updateStateTimer);
    }, [value])

    const debouncedSave = () => {
        const newNotes = notes.map((note) => {
            if(note.id == id){
                return {
                    ...note,
                    content: value
                }
            }
            return note;
        });
        setNotes(newNotes);        
    }

    const noteStyle = {
        marginTop: '20px',
        marginRight: '20px',
        borderStyle: 'solid',
        textAlign: 'center'
    }
    // sadsadNEED TO FIGURE OUT SAVING AND DISCARDING DATA 

    return (
        <input key={id}  value={value} onChange={(e) => {
            setValue(e.target.value);
        }} 
        style={noteStyle} disabled={!isEditMode} placeholder={content} 
        />
    )
}