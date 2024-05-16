import { useState } from "react";
import { Link } from "react-router-dom";
import "./pokemons.css";

const Pokemon = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const {pokemon} = props;
    console.log(pokemon);
    return (
        <Link
        to={`/infoPokemons/${pokemon.id}`}
        onClick={() => setShowDetails(!showDetails)}
        >
        <div className="card-pokemon">
            <div className="img-card-pokemon">
            <img
                src={pokemon && pokemon.sprites.front_default}
                alt={pokemon && pokemon.name}
            />
            </div>
            <div className="body-card">
            <div className="top-card">
                <h3>{pokemon && pokemon.name}</h3>
                <div>#{pokemon && pokemon.id}</div>
            </div>
            <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                    return (
                    <div key={index} className="pokemon-type-text">
                        {type.type.name}
                    </div>
                    );
                })}
                
            </div>
            </div>
        </div>
        </Link>
    );
};

export { Pokemon };
