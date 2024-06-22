import React from 'react'
import { Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { useGlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {toggleTheme, theme} = useGlobalStates();

  return (
    <nav className='nav' id={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <h4>DH Clinic</h4>
        <img className="img" src="./images/favicon.ico" alt="" />
      </div>
      <div>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
      <Link to="/favs">
        <span>Favs</span>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
      </div>
    </nav>
  )
}

export default Navbar