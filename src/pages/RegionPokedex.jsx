import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { GlobalContext } from "../context/globalContext";
import { lupe } from "../assets";
import Loading from "../components/Loading";
import BottomNavbar from "../components/BottomNavbar";

const RegionPokedex = () => {
  const pokemonsEndpoint = localStorage.getItem('pokemonsByRegion');
  const [pokemonsData, setPokemonsData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const {
    handlePokemonDetail,
    handlePokemonSpecies,
    handlePokemonEvolutionChain,
  } = useContext(GlobalContext);
 console.log(pokemons);
 
 useEffect(() => {
  const fetchPokemonsData = async () => {
    const response = await fetch(pokemonsEndpoint);
    const data = await response.json();
    setPokemonsData(data.results);
  };
  fetchPokemonsData();
  localStorage.removeItem("endpoint")
  localStorage.removeItem("species")
  localStorage.removeItem("evolutionChain")
 }, [])

 useEffect(() => {
  const fetchPokemons = async () => {
        const pokemonDataPromises = pokemonsData.map(pokemon => {
          return fetch(pokemon.url)
            .then(response => response.json());
        });
        const pokemonDataArray = await Promise.all(pokemonDataPromises);
        setPokemons(pokemonDataArray);
  };

  fetchPokemons();
}, [pokemonsData]);

  return (
    <section className="flex flex-col h-full overflow-hidden pb-[72px]">
    <div className="pb-[25px] w-full h-full">
      </div>
      <div className="flex items-center text-gray-400 focus-whitin:text-gray-600">
        <img
          src={lupe}
          alt="lupe"
          className="w-5 h-5 absolute ml-3 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Procurar Pokemon..."
          className="w-full h-[52px] pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
      </div>
    <div className="flex flex-col items-center overflow-hidden">
       {pokemons.lenght === 0 ? (
          <Loading />
        ) : (
          pokemons.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon.id}/${pokemon.name}`}
              onClick={() => {
                handlePokemonDetail(pokemon.id);
                handlePokemonSpecies(pokemon.id);
                handlePokemonEvolutionChain(pokemon.id);
              }}
              key={pokemon.id}
            >
              <PokemonCard
                number={pokemon.id}
                name={pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
                types={pokemon.types}
                image={pokemon.sprites.front_default}
              />
            </Link>
          ))
        )}
    </div>
    <BottomNavbar />
    </section>
  )
}

export default RegionPokedex