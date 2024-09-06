import React, { useState } from 'react';
import './Carousel.scss';
import Right from '../images/lef.png';
import Left from '../images/le.png';

const Carousel = ({ pictures = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index >= pictures.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  // Si une seule image, pas de contrôles ni de compteur
  const isSingleImage = pictures.length === 1;

  return (
    <div id="carouselExample" className="carousel">
      <div className="carousel-inner">
        {pictures.map((src, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={src} alt={`Slide ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </div>

      {/* Affichage des boutons et du compteur uniquement si plus d'une image */}
      {!isSingleImage && (
        <>
          <button className="carousel-control-prev" onClick={prevSlide}>
            <img src={Right} alt="Left Arrow" className="carousel-arrow-left" />
          </button>

          <div className="carousel-counter">
            <span className='conteurImage'>{currentIndex + 1} / {pictures.length}</span>
          </div>

          <button className="carousel-control-next" onClick={nextSlide}>
            <img src={ Left} alt="Right Arrow" className="carousel-arrow-right" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
