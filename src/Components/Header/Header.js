import React from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import {ImSearch} from "react-icons/im";

const Header = ()=>{
    console.log(logo);
    return(
        <nav className='header'>
        <img src={logo} alt='netflix logo'/>

        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recently">Recently Added</Link>
            <Link to="/mylist">MyList</Link>
        </div>

        <ImSearch/>
        </nav>
    )
}

export default Header 