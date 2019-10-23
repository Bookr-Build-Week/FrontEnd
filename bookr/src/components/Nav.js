// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {

    
//     return(
//         <div className = 'nav'>
//             <h1>Bookr</h1>
//             <Link to='/login'>Login</Link>
//             <Link to='/protected'>Book List</Link>
//            <Link to='/logout'>Logout</Link>
//         </div>
//     )
// }

// export default Nav;

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Nav = () => {

  return (
  

  <div className="nav">
    <h1>Bookr</h1>
    <div className="nav-link"> 
      
      <NavLink className="link" key={'001'} to={'/home'}>
        <HouseOutlinedIcon className="link-icon" alt="logo" />
        <div>Home</div>
      </NavLink>

      <NavLink className="link" key={'002'} to={'/saved-books'}>
        <MenuBookIcon className="link-icon" alt="logo" />
        <div>BookList</div>
      </NavLink>

        <button className="logout">Logout</button>
        <button className="login">Login</button>
    </div>
  </div>
)};

export default Nav;