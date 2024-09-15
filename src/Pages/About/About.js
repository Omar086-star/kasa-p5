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
            {/* <p className='test_Affichage'>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p> */}
          </Collapse>

          <Collapse title="Respect" hideContent={true}>
            {/* <p className='test_Affichage'>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p> */}
          </Collapse>

          <Collapse title="Service" hideContent={true}>
            {/* <p className='test_Affichage'>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </p> */}
          </Collapse>

          <Collapse title="Sécurité" hideContent={true}>
            {/* <p className='test_Affichage'>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
            </p> */}
          </Collapse>

        </div>
      </div>
    </div>
  );
}

export default About;
