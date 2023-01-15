import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import { getDetails } from "../../Api/movie";
import "./details.css"

const Details=()=> {

    const {id}=useParams()

    const [details, setDetils] = useState()

    useEffect(() => {
        getDetails(id).then((respuesta) => {
            setDetils(respuesta)
        })
    },[id])

    console.log(details)

    return (
      <div className="contenedor-details">
        <img className="imgdescrip" src= {`https://image.tmdb.org/t/p/w500${details?.poster_path}`}/>
        <div>
          <h3>
            {details?.title}
          </h3>
          <div className="descripdetails">
            <p>
            {details?.overview}    
          </p>
          </div>
          
          
        </div>
      </div>
    );
  }
  
  export default Details;