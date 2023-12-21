import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
 const Create=(props)=>{
    const[expand,setexpand]=useState(false)
    const [note,setnote]=useState({
        title:"",
        content:"",
    });
    const inputs=(event)=>{
        const {name,value}=event.target;
        setnote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            };
        });
        console.log(note);
    };
    const add=()=>{
props.passnote(note);
setnote({
    title:"",
    content:"",
})
    }
    const expanded=()=>{
        setexpand(true)
    }
    const back=()=>{
        setexpand(false)
    }
    return (<>
        <div className="main_note" onDoubleClick={back}>
            <form>
            {expand?
                <input type="text" 
                name="title"
                value={note.title}
                 onChange={inputs}
                  autoComplete="off"
                   placeholder="Title"/>: null}
                <textarea rows="" 
                column="" 
                name="content"
                value={note.content} 
                onChange={inputs} 
                placeholder="Write a note..."
                onClick={expanded}
                 
                />
                {expand?
            <Button onClick={add}>
                <AddIcon className='plus'/>
            </Button>: null}
            </form>
        </div>
    </>);
 }
 export default Create;