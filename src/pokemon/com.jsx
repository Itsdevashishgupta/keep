import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Com=()=>{
    const [num,setnum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();
useEffect(()=>{
    async function getData(){
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res.data.name)
        setName(res.data.name)
        setMoves(res.data.moves.length)
    }
    getData();
})
   return(  <>
   <h1>I choose {num}</h1>        
   <h1>My name is {name}</h1>        
   <h1>I have {moves} Moves</h1>        
   <select value={num} onChange={(event)=>{
    setnum(event.target.value)
   }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="5">5</option>
        </select>
     </>)
}
export default Com;