import React from 'react'
import LogoNoir from "../../images/logoNoir d'écran.png";
import './styles.scss'
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='FooterImage'>
      <img className='logoImageNoir' src= {LogoNoir } alt="logo" />

      </div>
      <div className='FooterText'>
<h4>© 2020 Kasa. All rights reserved</h4>
      </div>
    </div>
  )
}
