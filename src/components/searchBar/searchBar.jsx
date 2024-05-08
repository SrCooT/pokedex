    import  { useState } from "react";
    import "./searchbar.css";


    const SearchBar = (props) => {
    const [search, setSearch] = useState("dito");
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.lenght === 0){
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search);
    };

    return ( 

        <div className="container-searchBar">
        <div className="searchbar">
            <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
        </div>
        <div className="searchbar-btn">
            <button onClick={onButtonClickHandler}>Buscar</button>
        </div>

    </div>
    )
    };

    export { SearchBar };
