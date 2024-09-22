import React from 'react';
import "./styles.scss";

function Banner({ title , cover }) {
  return (
    <div className="banner"       style={{ backgroundImage: `url(${cover})` }} // Set the background image dynamically
>
      <h1 className="titreBanner">{title}</h1>
    </div>
  );
}

export default Banner;
