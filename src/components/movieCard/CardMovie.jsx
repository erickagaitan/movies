import React from "react";
import { useNavigate } from "react-router-dom"
import "./card.css"

const CardMovie=({titulo, img, fecha,id})=> {
  
  const navigate = useNavigate()

  const verDetalle = (id)=> {
    navigate (`/details/${id}`)
  }

    return (
      <div className="contenedor-cardmovie">
        <div className="subcontainer-cardmovie">
          <div className="contenedor-header-img">
            <img 
              className="header-img" 
              src={img} alt="header-img"  
              height={200}
            />
          </div>
          <div className="container-cardmovie-title">
            <h3>{titulo}</h3>
          </div>
          <div>
            <p className="fechapeli">Año de Estreno: {fecha}</p>
          </div>
        </div>
        <div className="cont-cardmovie-button">
          <button onClick={ ()=>verDetalle(id) }>Ver mas</button>
        </div>
      </div>
    );
  }
  
  export default CardMovie;