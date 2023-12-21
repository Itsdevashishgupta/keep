import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./about"; 
import Contact from "./contact";
import Nav from "./navbar";
import Service from "./sevice";
import "./index.css";
import User from "./user";
import Search from "./search";
const Name=()=>{
    return(<h1>hello my name is dev</h1>)
}
const Rout=()=>{
     return(<>
     <Nav/>
        <Routes>

        {/* on using Component it reload the entire page while render only call the updates   */}
            <Route exact path="/" Component={About}/>
            <Route exact path="/service" Component={()=><Service name="Service"/>}/>
            <Route exact path="/search" Component={Search}/>
            <Route exact path="/contact" Component={()=><Contact name="contact"/>}/>
            <Route exact path="/user/:name/:lname" Component={()=><User name="dev"/>}/>
            <Route path="/contact/name" Component={Name}/>
        </Routes>
     </>)
    }
export default Rout;