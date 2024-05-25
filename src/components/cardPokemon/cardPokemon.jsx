import "./cardPokemon.css";
import { Pokemon } from "../Pokemons/pokemons";
import { ThemeTogglerButton } from "../theme-button/theme-toggler-button";
const CardPokemon = (props) => {
  // eslint-disable-next-line react/prop-types
  const { pokemons, loading,  } = props;

  return (
    <div className=" header-pokemon">
      <div className="header-painel-pokemons">
        <h1>CooTDex</h1>
        <div className="button-tema">
          <ThemeTogglerButton />
        </div>
      </div>
      <div>
        {loading ? (
          <div>Carregando, myFriend...</div>
        ) : (
          <div className="painel-pokemons">
            {pokemons &&
              // eslint-disable-next-line react/prop-types
              pokemons.map((pokemon, index) => (
                <Pokemon key={index} pokemon={pokemon} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { CardPokemon };
