import React from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom';

function PageLocation({ id, title, cover, description }) {
  return (
    <div className='appartement'>
      <Link className='imageLocation' to={`/flat/${id}`}>
        <img src={cover} alt={description} />
        <h4 className='titreLocation'>{title}</h4>
      </Link>
    </div>
  );
}

export default PageLocation;

