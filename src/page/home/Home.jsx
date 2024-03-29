import React, {useEffect, useState} from "react";
import CardMovie from "../../components/movieCard/CardMovie";
import Buscador from '../../components/buscador/Buscador';
import { getPopular, searchMoviesApi } from "../../Api/movie";

import "./home.css"

const Home=()=> {

    const [peliculas, setPelicuas] = useState()
    
    const [peliculasBuscador, setPeliculasBuscador] = useState()

    const[ textoBusqueda, setTextoBusqueda] = useState()

    useEffect(() => {
        getPopular(5).then((respuesta) => {
            setPelicuas(respuesta.results)
        })
    },[])

    useEffect(() => {
        if(textoBusqueda){
            searchMoviesApi(textoBusqueda).then((respuesta) => {
            setPeliculasBuscador(respuesta.results)
            }
        )}
    },[textoBusqueda])

    const respuestaPelicula = peliculasBuscador ? peliculasBuscador : peliculas;

    return (
        <>
        <div>
        <Buscador setTextoBusqueda={setTextoBusqueda} />
        </div>

        <div className="contenedor-home">
            
            {
                respuestaPelicula?.map((respuesta,index)=> (
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
        </>


    );
  }
  
  export default Home;