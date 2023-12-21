import React from "react";
import { useLocation, useParams, useNavigate, Navigate } from "react-router-dom";
const User=()=>{
    const {name,lname}=useParams();
    const location=useLocation();
    const navi=useNavigate();
    return (<><h1>user {name} {lname} page</h1>
    <p>My location is {location.pathname}</p>
    { location.pathname===`/user/dev/gupta`?
    <button onClick={()=>navi('/')}>Go back</button>:null}</>)
} 

export default User;