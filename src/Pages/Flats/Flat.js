import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Carousel from "../../components/carousel.js";
import SoFlatimage from "../../components/soFlatimage.js";
import { useParams } from 'react-router-dom';
import data from '../../data/db.json';
import FlatImage from '../../components/flatImage.js';
import Discription from '../../components/Discription.js'; // Corrected import for Discription

function Flat() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    function fetchApartmentById() {
      const foundLocation = data.find((apartment) => apartment.id === id);
      setLocation(foundLocation);
    }

    fetchApartmentById();
  }, [id]);

  if (!location) {
    return <p>Loading...</p>;
  }

  const pictures = Array.isArray(location.pictures) ? location.pictures : [];

  return (
    <div className='Flat_page'>
      <FlatImage pictures={pictures[0]} description={location.description} />
      <Carousel pictures={pictures} />
      <SoFlatimage
        title={location.title}
        location={location.location}
        host={location.host}
        tags={location.tags}
        rating={location.rating}
      />
      <Discription
        description={location.description}
        equipments={location.equipments}
      />
    </div>
  );
}

export default Flat;
