import React  from "react";
import "./Errors.css";
import { Link } from 'react-router-dom';
function Errors(){

    return <div className='pajeError'>
    <h1 className='error404'>404</h1> 
    <p className='paragraphError'>Oups! La page que <br className="brLigne"></br> vous demandez n'existe pas.</p>
    <Link to={"/About"} > <p className="retornPage">Retourner sur la page d’accueil</p></Link>
    </div>

}
export default Errors;