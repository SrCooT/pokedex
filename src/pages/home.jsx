    import { CardPokemon } from "../components/cardPokemon/cardPokemon";
import { Footer } from "../components/footer/footer";
    import { SearchBar } from "../components/searchBar/searchBar";
    import { ThemeTogglerButton } from "../components/theme-button/theme-toggler-button";
    import { ThemeProvider } from "../components/themesPages/themePage";
    import { getPokemon, getPokemonData, getPokemonList} from "../service/apiService";
    import NavBar from "./../components/navBar/navBar";
    import { useEffect, useState } from "react";


    const Home = () => {
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const RefreshPokemons = async () => {
        try {
        setLoading(true);
        setNotFound(false);
        const data = await getPokemon();
        const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
        });

        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        } catch (error) {
        console.log("RefreshPokemons Error", error);
        }
    };
    useEffect(() => {
    
        RefreshPokemons();
    }, []);

    const onSearchHandler =  async (pokemon) => {
        if(!pokemon) {
            return getPokemon()
        }

        setLoading(true)
        setNotFound(false)
        const result = await  getPokemonList(pokemon)
        if(!result){
            setLoading(false)
            setNotFound(true)
        }else {
            setPokemons([result])
        }
        setLoading(false)
        setNotFound(false)
    }

    return (
        <ThemeProvider>
        <ThemeTogglerButton />
        <NavBar />
        <SearchBar  onSearch={onSearchHandler}/>
        {notFound ? ( 
            <div className="not-found-text">Ai não my Friend !</div>
        ):(
            <CardPokemon pokemons={pokemons} loading={loading} />
        )}
            <Footer />
            </ThemeProvider>
        );
    };
    
    export { Home };
