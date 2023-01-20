import React from "react";
import { useNavigate } from "react-router-dom"
import Logo from '../../assets/img/logo_pelicula.svg'

import './header.css'

const Header=()=> {

  const navigate = useNavigate()

  const VistaHome = ()=> {
    navigate (`/`)
  }

    return (
      <div className="contenedor-header">
        <div onClick={ ()=>VistaHome ()}className="logo">
            <img src={Logo}  width={100} height={50} alt=""/>
        </div>
      </div>
    );
  }
  
  export default Header;