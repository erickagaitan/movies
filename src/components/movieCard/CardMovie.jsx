import React from "react";
import "./card.css"

const CardMovie=({titulo, img, descripcion})=> {
    return (
      <div className="contenedor-cardmovie">
        <div>
          <h3>{titulo}</h3>
        </div>
        <div className="header-img">
            <img src={img} alt="" width={200}/>
        </div>
        <div>
          <h4>{descripcion}</h4>
        </div>
      </div>
    );
  }
  
  export default CardMovie;