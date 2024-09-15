import React, { useEffect, useState } from 'react';
import "./Styles.scss";
import KarteKasa from '../../components/CarteKasa.js';
import Data from '../../data/db.json';
import { Link } from 'react-router-dom';
import Flat from '../Flats/Flat.js';
import Banner from '../../components/Banner.js';
import Plan1 from '../../images/sourc-image.png';
function Article() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    const list = Data;
    setApartments(Array.isArray(list) ? list : [list]);
  }

  return (
    <div className='Container '>
<Banner title="Chez vous, partout et ailleurs" cover={Plan1} />
    
    <div className="article_appartement">
      {apartments.length === 0 && <p>Loading...</p>}
      {apartments.map((apartment, index) => (
        <Link 
          key={index} 
          to={`/flat/${apartment.id}`} 
          element={<Flat />}
          className="apartment-link"
        >
          <KarteKasa
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Article;
