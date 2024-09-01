import React, { useEffect, useState } from 'react';
import "./styles.scss";
import PageLocation from './pagelocation.js';
import data from '../../../data/db.json';
import { Link } from 'react-router-dom';
import Flat from '../Flat/Flat.js';

function Article() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    const list = data;
    setApartments(Array.isArray(list) ? list : [list]);
  }

  return (
    <div className="article_appartement">
      {apartments.length === 0 && <p>Loading...</p>}
      {apartments.map((apartment, index) => (
        <Link 
          key={index} 
          to={`/flat/${apartment.id}`} 
          element={<Flat />}
          className="apartment-link"
        >
          <PageLocation
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        </Link>
      ))}
    </div>
  );
}

export default Article;
