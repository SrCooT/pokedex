/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./pokemons.css";

const Pokemon = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { pokemon } = props;

  return (
    <Link
      to={`/infoPokemons/${pokemon.id}`}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="card-pokemon">
        <div className="img-card-pokemon">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
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
