import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Note=(props)=>{
    const deleteNote=()=>{
       props.delete(props.id);
    }
  return (<>
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button className="btn" onClick={deleteNote}>
     <DeleteIcon className="deleteicon"/>
     </button>
  </div>
  </>);
};
export default Note;