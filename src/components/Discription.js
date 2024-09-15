import React from 'react';
import Collapse from '../components/Collapse'; 

function Discription({ description, equipments }) {
  return (
    <div className='discription-container'>
      <div className='description-section'>
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
      </div>
      <div className='equipments-section'>
        <Collapse title="Équipements">
          <ul>
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Discription;
