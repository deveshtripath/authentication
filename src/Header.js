import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
// import { FcSearch } from "react-icons/ai";
import { SearchIcon } from '@heroicons/react/solid'

function Header() {

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                 <div className="header__search">
                        <SearchIcon/>                    
                    <input placeholder="Search" type ="text"/>
                 </div>
            </div>
            <div className="header__right">
            
              <Link to="/signin">  <button className="btn">Sign In </button> </Link>
              <Link to="/login">  <button className="btn">Login</button> </Link>
               
            </div>

            
        </div>
    )
}

export default Header
