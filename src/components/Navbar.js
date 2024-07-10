import React from 'react';
import "./Navbar.css";
import logo from "../logo 2024-07-04 092822.png";
import { Link } from 'react-router-dom';
 function Navpar() {
  return ( 
    <div>

   
    <nav className='navbar'>
      <Link to={"/"}> 
    <img className='logoImage' src= {logo } alt="logo" />
</Link>
       <div className="navbar_logo">
       <Link to={'/'}>
       <div className='Accueil'>Accueil</div>

       </Link>
        <Link to={'/About'}>
        <div className='propos'>A propos</div>
        </Link>
       </div>
    </nav>
    </div>
  )
}
export default Navpar;