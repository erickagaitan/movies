import { api_key } from "../constant";

export const getPopular = (page = 1) => {

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`

    return fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result
    })

}

export const getDetails = (id) => {

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-Es`

    return fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result
    })

}


export function searchMoviesApi(textoBusqueda) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${textoBusqueda}`;
  
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result;
      });
  }