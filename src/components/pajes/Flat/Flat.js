import React, { useEffect, useState } from 'react';
import "./sous-page/styles.scss";
import Carousel from "../../stat/carousel.js";
import SoFlatimage from "./sous-page/soFlatimage.js";
import Discription from './sous-page/discriptionAnnonce.js';
import { useParams } from 'react-router-dom';
import data from '../../../data/db.json';
import FlatImage from './sous-page/flatImage.js';

function Flat() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    function fetchApartmentById() {
      const foundLocation = data.find((apartment) => apartment.id === id);
      console.log("Fetched Location:", foundLocation); // Debugging line
      setLocation(foundLocation);
    }

    fetchApartmentById();
  }, [id]);

  if (!location) {
    return <p>Loading...</p>;
  }

  // Ensure pictures is an array, otherwise set it to an empty array
  const pictures = Array.isArray(location.pictures) ? location.pictures : [];

  console.log("Pictures Array:", pictures); // Debugging line

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
