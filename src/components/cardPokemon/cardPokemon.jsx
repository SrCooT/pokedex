import "./cardPokemon.css";
import { Pokemon } from "../Pokemons/pokemons";
import  Pagination from "../pagination/pagination";

const CardPokemon = (props) => {
    const { pokemons, loading , page, setPage, totalPages} =props;
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        };

    }
    const onRightClickHandler = () => {
        if(page+1 !==totalPages){
            setPage(page+1)
        };
    }
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
                <Pagination
                page={page+1}
                totalPages={totalPages}
                onLeftClick={onLeftClickHandler}
                onRightClick={onRightClickHandler}
                />
            </div>
        </div>
    );
};

export { CardPokemon };