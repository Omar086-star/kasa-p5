import React from 'react';
import './About.scss';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import Plan from '../../images/source2-image.png';

function About() {
  return (
    <div className='grandContainer'>
      <Banner cover={Plan} />

      <div className='about'>
        <div className='boxDeServices'>

          <Collapse title="Fiabilité" hideContent={true}>
        
          </Collapse>

          <Collapse title="Respect" hideContent={true}>
     
          </Collapse>

          <Collapse title="Service" hideContent={true}>
     
          </Collapse>

          <Collapse title="Sécurité" hideContent={true}>
      
          </Collapse>

        </div>
      </div>
    </div>
  );
}

export default About;
