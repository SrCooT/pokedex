import "./infoPokemon.css";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonList } from "../../service/apiService";
import { ThemeContext} from "../themesPages/themePage";
import { ThemeTogglerButton } from "../theme-button/theme-toggler-button";
import { Footer } from "../footer/footer";

const PokemonDetails = () => {
  const { theme } = useContext(ThemeContext);
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

  const getStatusColor = (name) => {
    switch (name.toLowerCase()) {
        case "hp":
            return "red";
        case "attack":
            return "blue";
        case "defense":
            return "green";
        case "speed":
            return "purple";
        default:
            return "gray";
    }
};

const showAlert = () => {
  alert("Depois do Ok é só aproveitar");
};

  return (

    

    <div  style={{ color: theme.color, backgroundColor: theme.background}}>
      
      <div className="info-pokemon-card" >
<ThemeTogglerButton  className="button"/>
        {pokemonData && (
          <div className="card-info-pokemon">
                <div className="img-pokemon">
                        <a href="https://www.youtube.com/watch?v=-PlAg8R9TG4&ab_channel=AshKetchum" target="_blank" > <img src={pokemonData.image}
                          alt={pokemonData.name}
                          onClick={showAlert} 
                          /></a>
                    </div>
                      
                  <h2>{pokemonData.name}</h2>
                      <p className="types-pokemon">Type: {pokemonData.type}</p>
                      <p className="moves">Moves: {pokemonData.moves.join(", ")}</p>
                      <p className="habilit-pokemon"> Abilities:{pokemonData.abilities.join(", ")}</p>

                    <div className="status">
                      Stats:
                    </div>
                        {pokemonData.stats.map((stat) => (
                          <div className="status-ponts" key={stat.name}>
                              <div
                            className="status-ponts-barra"
                            style={{  width: `${stat.base_stat}%`,  backgroundColor: getStatusColor(stat.name),}} />
                            <span className="status-label">
                                {stat.name}: {stat.base_stat}
                            </span>
                </div>
              ))}
          </div>
        )}
        <Link to="/" className="back">Back</Link>
        <Footer/>
      </div>
    </div>
  );
};

export { PokemonDetails };
