import React, { useState } from 'react';
import './styles.scss';

function Discription({ description, equipments }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [isEquipmentVisible, setEquipmentVisible] = useState(true);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const toggleEquipment = () => {
    setEquipmentVisible(!isEquipmentVisible);
  };

  return (
    <div>
      <div className='zone-description'>
        <div className='zone1'>
          <div className='tit1' onClick={toggleDescription}>
            <h1 className='description_title1'>Description</h1>
            <i
              className={`fa-solid fa-chevron-${isDescriptionVisible ? 'up' : 'down'} iconDES`}
            ></i>
          </div>
          {isDescriptionVisible && (
            <div className='paragraph_description1'>
              <p>{description}</p>
            </div>
          )}
        </div>

        <div className='zone2'>
          <div className='tit1' onClick={toggleEquipment}>
            <h1 className='description_title1'>Équipements</h1>
            <i
              className={`fa-solid fa-chevron-${isEquipmentVisible ? 'up' : 'down'} iconDES2`}
            ></i>
          </div>
          {isEquipmentVisible && (
            <div className='paragraph_description1'>
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discription;
