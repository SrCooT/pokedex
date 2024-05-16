import axios from "axios";

const getPokemonList = async (pokemon) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getPokemon = async (limit = 1000, offset = 0) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch Pokemon list');
    }
};

const getPokemonData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch Pokemon data');
    }
};

export { getPokemonList, getPokemon, getPokemonData };
