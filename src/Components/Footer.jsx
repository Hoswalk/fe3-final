import React from 'react'
import { useGlobalStates } from '../Context/Context';

const Footer = () => {

  const {theme} = useGlobalStates();


  return (
    <footer id={theme === 'dark' ? 'dark' : 'light'} >
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <div>
          <img src="./images/ico-facebook.png" alt="Facebook" />
          <img src="./images/ico-instagram.png" alt="Instagram" />
          <img src="./images/ico-tiktok.png" alt="Tiktok" />
          <img src="./images/ico-whatsapp.png" alt="Whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
