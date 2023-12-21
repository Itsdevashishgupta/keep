import React from "react";
import logo from "./images/keep.jpg"
const Header=()=>{
   return(<>
   <div className="head">
    <img src={logo} alt="logo" height="70px" width="70px" />
    <h1>Keep Notes</h1>
    </div>
   </>)
}
export default Header;