import React from "react";
import { NavLink } from "react-router-dom";
const Nav=()=>{
    return(<>
    <div className="menu_style">
    <NavLink  to="/">About</NavLink>
    <NavLink  to="/service">Service</NavLink>
    <NavLink  to="/search">Search</NavLink>
    <NavLink  to="/user/dev/gupta">User</NavLink>
    <NavLink  to="/contact">contact</NavLink>
    </div>
    </>)
}
export default Nav