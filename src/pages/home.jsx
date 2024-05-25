import './css/home.css'
import { CardPokemon } from "../components/cardPokemon/cardPokemon";
import { Footer } from "../components/footer/footer";
import { SearchBar } from "../components/searchBar/searchBar";
import { ThemeContext} from "./../components/themesPages/themePage";
import { getPokemon, getPokemonData, getPokemonList } from "./../service/apiService";
import NavBar from "./../components/navBar/navBar";
import { useContext, useEffect, useState } from "react";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);

    const RefreshPokemons = async () => {
        try {
        setLoading(true);
        setNotFound(false);
        const data = await getPokemon(10, 10 * (page - 1));

        const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
        });

        const results = await Promise.all(promises);
        setPokemons(prevPokemons => [...prevPokemons, ...results]);
        setLoading(false);
        } catch (error) {
        console.log("RefreshPokemons Error", error);
        }
    };

    useEffect(() => {
        RefreshPokemons();
    }, [page]);

    const onSearchHandler = async (pokemon) => {
        if (!pokemon) {
        return RefreshPokemons();
        }

        setLoading(true);
        setNotFound(false);
        try {
        const result = await getPokemonList(pokemon.toLowerCase());
        if (!result) {
            setNotFound(true);
            setPokemons([]);
        } else {
            setPokemons([result]);
            setNotFound(false);
        }
        } catch (error) {
        console.error("Search Error", error);
        setNotFound(true);
        setPokemons([]);
        } finally {
        setLoading(false);
        }
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleLoadLess = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1)); 
        setPokemons([]); 
    };

    return (
        <div className="pageFull" style={{ color: theme.color, backgroundColor: theme.background}}>
        <NavBar />
        <SearchBar onSearch={onSearchHandler} />
        {notFound ? (
            <div className="not-found-text">Ai não my Friend !</div>
        ) : (
            <>
            <CardPokemon
                pokemons={pokemons}
                loading={loading}
                fetchMorePokemon={handleLoadMore}
            />
            <div className="load-more-buttons">
                <button onClick={handleLoadMore}>Carregar mais</button>
                {page > 1 && (
                <button onClick={handleLoadLess}>Carregar menos</button>
                )}
            </div>
            </>
        )}
        <Footer />
        </div>
    );
};

export { Home };
