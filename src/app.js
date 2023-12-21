import React, { useState } from "react";
import Header from './header';
import Footer from './footer';
import Create from './create';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Note from './note';
const App=()=>{
    const [additem,setAdd]=useState([]);
    const addnote=(note)=>{
        // alert("i ma clicked");
        setAdd((old)=>{
            return [...old,note]
        })
        console.log(note);
    };
    const ondelete=(id)=>{
       setAdd((olddata)=>
        olddata.filter((curr,ind)=>{
            return ind!==id;
        })
       )
    }
   return( <>
   <body>
<Header/>
  <Create passnote={addnote}/> 
  <div className="cards">
 { additem.map((val,index)=>{
    return <Note key={index}
        id={index}
        title={val.title}
        content={val.content}
        delete={ondelete}
    />
  })}</div>
  </body>
    </>
)}
export default App;