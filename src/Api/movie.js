const api_key = '70631dfdc1d4ef58b1c255cc90e62b6c';

export const getPopular = (page = 1) => {

    const URL = `https://api.themoviedb.org/3/movie//popular?api_key=${api_key}&language=en-US&page=${page}`

    return fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result
    })

}

