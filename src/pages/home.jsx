    import './css/home.css'
    import { CardPokemon } from "../components/cardPokemon/cardPokemon";
    import { Footer } from "../components/footer/footer";
    import { SearchBar } from "../components/searchBar/searchBar";
    import { ThemeContext} from "./../components/themesPages/themePage";
    import {
    getPokemon,
    getPokemonData,
    getPokemonList,
    } from "./../service/apiService";
    import NavBar from "./../components/navBar/navBar";
    import { useContext, useEffect, useState } from "react";




    const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [totalPages, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const itensPerPage = 12;
    const RefreshPokemons = async () => {
        try {
        setLoading(true);
        setNotFound(false);
        const data = await getPokemon(itensPerPage, itensPerPage * page);

        const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
        });

        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        setTotalPage(Math.ceil(data.count / itensPerPage));
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

    return (
        <div className="pageFull" style={{ color: theme.color, backgroundColor: theme.background}}>
            <NavBar />
            <SearchBar onSearch={onSearchHandler} />
            {notFound ? (
                <div className="not-found-text">Ai não my Friend !</div>
            ) : (
                <CardPokemon
                pokemons={pokemons}
                loading={loading}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                />
            )}
            <Footer />
            </div>
    );
    };

    export { Home };
