import React from 'react';
import "./styles.scss";
import logo from "../images/logo 2024-07-04 092822.png";
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
       <div className='Accueil'>ACCUEIL</div>

       </Link>
        <Link to={'/About'}>
        <div className='propos'>A PROPOS</div>
        </Link>
       </div>
    </nav>
    </div>
  )
}
export default Navpar;