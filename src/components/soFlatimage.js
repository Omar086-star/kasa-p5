import React from 'react';
import "./styles.scss";

export default function SoFlatimage({ title, location, host, tags, rating }) {
  return (
    <div className='bas_page'>
      <div className='text_page'>
        <h1 className='subtitle'>{title}</h1>
        <h2 className='Paris'>{location}</h2>
        <div className='paragraphs'>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
      <div className='bas_page2'>
        <div className='personne'>
          <h3 className='Alexandre'>{host.name}</h3>
          <img className='badge' src={host.picture} alt={host.name} />
        </div>
        <div className='icons_avis'>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`avis ${index < rating ? '' : 'moins'}`}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}
