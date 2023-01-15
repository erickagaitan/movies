import React, {useEffect, useState} from "react";
import CardMovie from "../components/movieCard/CardMovie";
import { getPopular } from "../Api/movie";


import "./home.css"

const Home=()=> {

    const [peliculas, setPelicuas] = useState()

    useEffect(() => {
        getPopular(1).then((respuesta) => {
            setPelicuas(respuesta.results)
        })
    },[])


    return (
        <div className="contenedor-home">
            {
            peliculas?.map((respuesta) => (
            <CardMovie 
                titulo={respuesta.title} 
                img= {`https://image.tmdb.org/t/p/w400${respuesta.backdrop_path}`}
                descripcion={respuesta.overview}
            />
        ))
            }
        </div>


    );
  }
  
  export default Home;