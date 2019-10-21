import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    
    return(
        <div className = 'nav'>
            <h1>Bookr</h1>
            <Link to='/login'>Login</Link>
            <Link to='/protected'>Book List</Link>
           <Link to='/logout'>Logout</Link>
        </div>
    )
}

export default Nav;