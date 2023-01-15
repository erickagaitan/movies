import React, {useEffect, useState} from "react";
import CardMovie from "../components/movieCard/CardMovie";
import { getPopular } from "../Api/movie";
import Harry from '../assets/img/imagen_harry.jpg'


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
                peliculas?.map((respuesta,index)=> (
                    respuesta.backdrop_path &&
                    <CardMovie 
                        key={index}
                        titulo={respuesta.title} 
                        img= {`https://image.tmdb.org/t/p/w500${respuesta.backdrop_path}`}
                        fecha={respuesta.release_date}
                        id={respuesta.id}
                    />
                ))
            }
        </div>


    );
  }
  
  export default Home;