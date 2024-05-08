import "./cardPokemon.css";
import { Pokemon } from "../Pokemons/pokemons";

const CardPokemon = ({ pokemons, loading }) => {
    return (
        <div>
            <div className="header-painel-pokemons">
                <h1>CooTDex</h1>
            </div>
            <div>
                {loading ? (
                    <div>Carregando, myFriend...</div>
                ) : (
                    <div className="painel-pokemons">
                        {pokemons &&
                        pokemons.map((pokemon, index) => (
                            <Pokemon key={index} pokemon={pokemon} />
                        ))}
                    </div>
                )}
                <div className="loading-pokemons">Carregar Mais...</div>
            </div>
        </div>
    );
};

export { CardPokemon };