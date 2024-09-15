import React, { useState } from 'react';
import "./styles.scss";

function Collapse({ title, children, hideContent = false }) {
  const [isVisible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={toggleVisibility}>
        <h1 className='collapse-title'>{title}</h1>
        <i
          className={`fa-solid fa-chevron-${isVisible ? 'up' : 'down'} collapse-icon`}
        ></i>
      </div>
      {isVisible && !hideContent && <div className='collapse-content'>{children}</div>}
    </div>
  );
}

export default Collapse;
