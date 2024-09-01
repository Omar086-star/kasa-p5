import React, { useState } from 'react';
import './Carousel.scss';

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
      <button className="carousel-control-prev" onClick={prevSlide}>
        &#10094;
      </button>
      {/* Displaying the current image number and the total number of images */}
      <div className="carousel-counter">
        <span className='conteurImage'>{currentIndex + 1} / {pictures.length}</span>
      </div>
      <button className="carousel-control-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
