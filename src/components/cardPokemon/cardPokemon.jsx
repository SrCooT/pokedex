import "./cardPokemon.css";
import { Pokemon } from "../Pokemons/pokemons";
import  Pagination from "../pagination/pagination";
import { ThemeTogglerButton } from "../theme-button/theme-toggler-button";

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