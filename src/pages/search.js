import React from "react";
import { Link } from 'react-router-dom';



import React from 'react'
import SearchBar from "../components/SearchBar";

const search = () => {
    return (
        <>
        <nav className="search">
            <Link to={SearchBar}></Link>
            
        </nav>
        </>
    )
}

export default search
