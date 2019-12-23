import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{backgroundColor:'#454241', textAlign:'center', color:'white', margin: '0px', padding:'10px'}}>
            <h1 style={{marginBottom: '2px'}}>
                Todo List
            </h1>
            <Link to="/" style={linkStyle}>Home </Link> | <Link style={linkStyle} to="/about"> About</Link> 
        </header>
    )
}

const linkStyle ={
    color: 'white',
    textDecoration: 'none',
    margin: '0px'
}

export default Header
