import "./infoPokemon.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonList } from "../../service/apiService";
import { ThemeProvider } from "../themesPages/themePage";
import { ThemeTogglerButton } from "../theme-button/theme-toggler-button";

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonList(pokemonId);

        setPokemonData({
          name: data.name || "",
          image: data.sprites?.front_default || "",
          type: data.types?.[0]?.type?.name || "",
          abilities: data.abilities?.map((ability) => ability.ability.name) || [],
          moves: data.moves?.map((move) => move.move.name) || [],
          stats:
            data.stats?.map((stat) => ({
              name: stat.stat.name,
              base_stat: stat.base_stat,
            })) || [],
        });
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonId]);

  return (
   
    <ThemeProvider>
     <div className="">
      
      <div className="info-pokemon-card" >
        {pokemonData && (
          <div className="card-info-pokemon">
            <ThemeTogglerButton />
                <div className="img-pokemon">
              <img
                src={pokemonData.image}
                alt={pokemonData.name}
                
                
                />
                </div>
            <h2>{pokemonData.name}</h2>
            <p className="types-pokemon">Type: {pokemonData.type}</p>
            <p className="moves">Moves: {pokemonData.moves.join(", ")}</p>
            <p className="habilit-pokemon">
              Abilities:{pokemonData.abilities.join(", ")}
            </p>
            <div className="status">Stats:</div>
          
            {pokemonData.stats.map((stat) => (
              <p key={stat.name}   >
                {stat.name}:<span className="status-ponts"><span className="status-ponts-barra">{stat.base_stat}</span></span>
              </p>
            ))}
          </div>
        )}
        <Link to="/" className="back">Back</Link>
      </div>
    </div>
        </ThemeProvider>
  );
};

export { PokemonDetails };
