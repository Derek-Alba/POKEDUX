import axios from "axios"

export const getPokemons = () => {
    return axios.get(' https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((res) => (res.data.results))
        .catch((err) => console.log(err))
}

export const getPokemonsDetails = (pokemon) => {
    return axios.get(pokemon.url)
        .then((res) => res.data)
        .catch((err) => console.log(err))
}