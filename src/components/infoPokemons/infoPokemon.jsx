import './infoPokemon.css';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonList } from "../../service/apiService";

const PokemonDetails = () => {
    const { pokemonId } = useParams();
    console.log( pokemonId);
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPokemonList(pokemonId); 
                setPokemonData({
                    name: data.name || "",
                    image: data.sprites?.front_default || "",
                    type: data.types?.[0]?.type?.name || "",
                    abilities: data.abilities?.map(ability => ability.ability.name) || [],
                    moves: data.moves?.map(move => move.move.name) || []
                });
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        };

        fetchData();
    }, [pokemonId]);

    return (
        <div>
            <div className="info-pokemon-card">
                {pokemonData && (
                    <div className='card-info-pokemon'>
                        <h2>{pokemonData.name}</h2>
                        <img src={pokemonData.image} alt={pokemonData.name} />
                        <p>Type: {pokemonData.type}</p>
                        <p>Moves: {pokemonData.moves.join(', ')}</p>
                        <p>Abilities: {pokemonData.abilities.join(', ')}</p>
                    </div>
                )}
                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export { PokemonDetails };
