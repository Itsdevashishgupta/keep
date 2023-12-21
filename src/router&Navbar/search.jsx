import React, { useState } from "react";
import Sresult from "./sResult";
 const Search=()=>{
    const [img,setimg]=useState("")
   const input=(event)=>{
    console.log(event.target.value);
    setimg(event.target.value);
   }
    return(<>
    <div  className=" search">
        <input type="text" 
        placeholder="search anything" 
        onChange={input} value={img}/>
        {img!=="" ? <Sresult name={img}/>:null}
       
        </div>
    </>)
 }
 export default Search;