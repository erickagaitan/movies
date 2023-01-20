import React from "react"
import "./buscador.css"

const Buscador = ({setTextoBusqueda})=> {

    const textDeEntrada = (texto) => {
        setTextoBusqueda(texto.target.value)
    }

    return (

        <div className="container-buscador">
            <input 
                type="text"  
                className="buscar" 
                placeholder="Busca tu pelicula"
                onChange={(texto) => textDeEntrada(texto) }
            />        
        </div>
        
    )
}


export default Buscador;