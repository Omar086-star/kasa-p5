import React from 'react';
import "./styles.scss";
import Donnes from"../data/db.json";

function FlatImage({ pictures, description }) {
  return (
    <div className='Flat_image'>
      <img className='ImgFlat' src={Donnes.pictures} alt={Donnes.description} />
    </div>
  );
}

export default FlatImage;
