import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalUser, setGlobalUser] = useState({
    user: "",
    email: "",
    password: "",
    status: ""
  });
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [sentinela, setSentinela] = useState("sentinela")
  const [limit, setLimit] = useState(9)
  const [toggleDex, setToggleDex] = useState(false);
  const [toggleReg, setToggleReg] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleAcc, setToggleAcc] = useState(false);
  const [endpoint, setEndPoint] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [logged, setLogged] = useState(false);
  const [favoritiesPokemon, setFavoritiesPokemon] = useState([])
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLogged(true);
      setGlobalUser(prevGlobalUser => ({
        ...prevGlobalUser,
        user: prevGlobalUser.user || user.user,
        email: prevGlobalUser.email || user.email,
        password: prevGlobalUser.password || user.password,
        status: prevGlobalUser.status || user.status
      }));
    }
  }, []);

  useEffect(() => {
    const ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => setPokemonData(data.results));

    localStorage.removeItem("pokemons")
  }, [limit]);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      if (pokemonData.length > 0) {
        const cachedPokemons = localStorage.getItem('pokemons');
        if (cachedPokemons) {
          setPokemons(JSON.parse(cachedPokemons));
        } else {
          const pokemonDataPromises = pokemonData.map(pokemon => {
            return fetch(pokemon.url)
              .then(response => response.json());
          });
          const pokemonDataArray = await Promise.all(pokemonDataPromises);
          setPokemons(pokemonDataArray);
          localStorage.setItem('pokemons', JSON.stringify(pokemonDataArray));
        }
      }
    };
  
    fetchPokemons();
  }, [pokemonData]);

  const handlePokemonDetail = async (id) => {
    const ENDPOINT = `https://pokeapi.co/api/v2/pokemon/${id}/`  
    localStorage.setItem('endpoint', ENDPOINT);
  }

  const handlePokemonSpecies = async (id) => {
    const SPECIESENDPOINT = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    localStorage.setItem('species', SPECIESENDPOINT);
  }

  const handlePokemonEvolutionChain = async (id) => {
    const EVOLUTIONCHAINENDPOINT = `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    localStorage.setItem('evolutionChain', EVOLUTIONCHAINENDPOINT);
  }
  const handlePokemonsByRegions = async (limit, offset) => {
    const POKEMONSBYREGIONENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    localStorage.setItem('pokemonsByRegion', POKEMONSBYREGIONENDPOINT);
  }
  return (
    <GlobalContext.Provider
      value={{
        globalUser,
        setGlobalUser,
        pokemonData,
        setPokemonData,
        pokemons,
        setPokemons,
        sentinela,
        setLimit,
        limit,
        toggleAcc,
        setToggleAcc,
        toggleDex,
        setToggleDex,
        toggleFav,
        setToggleFav,
        toggleReg,
        setToggleReg,
        endpoint,
        setEndPoint,
        handlePokemonDetail,
        handlePokemonSpecies,
        handlePokemonEvolutionChain,
        handlePokemonsByRegions,
        loginError, 
        setLoginError,
        favoritiesPokemon, 
        setFavoritiesPokemon,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
