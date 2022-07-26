import React  from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styled";


export default function Navbar(){
  return (

    <Nav className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
    </Nav>

  );
};


