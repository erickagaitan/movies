import React from "react";
import Logo from '../../assets/img/logo_pelicula.svg'

import './header.css'

const Header=()=> {
    return (
      <div className="contenedor-header">
        <div className="header-img">
            <img src={Logo}  width={100} height={50} alt=""/>
        </div>
      </div>
    );
  }
  
  export default Header;