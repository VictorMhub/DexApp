import React, { useEffect, useState, useContext } from "react";
import { lupe } from "../assets";
import PokemonCard from "../components/PokemonCard";
import { GlobalContext } from "../context/globalContext";
import Loading from "../components/Loading";
import BottomNavbar from "../components/BottomNavbar";
import { Link } from "react-router-dom";

const FavoritiesPokemonsCard = () => {
  const {
    favoritiesPokemon,
    setToggleDex,
    setToggleReg,
    setToggleFav,
    setToggleAcc,
    handlePokemonDetail,
    handlePokemonSpecies,
    handlePokemonEvolutionChain,
  } = useContext(GlobalContext);
  
useEffect(() => {
    setToggleDex(true);
    setToggleAcc(false);
    setToggleFav(false);
    setToggleReg(false);
    localStorage.removeItem("endpoint");
    localStorage.removeItem("species");
    localStorage.removeItem("evolutionChain");
  }, []);

  return (
    <section className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center pb-[70px]">
          {favoritiesPokemon.length === 0 ? (
            <Loading />
          ) : (
            favoritiesPokemon.map((pokemon) => (
              <Link
                to={`/pokemon/${pokemon.id}/${pokemon.details.name}`}
                onClick={() => {
                  handlePokemonDetail(pokemon.id);
                  handlePokemonSpecies(pokemon.id);
                  handlePokemonEvolutionChain(pokemon.id);
                }}
                key={pokemon.id}
              >
                <PokemonCard
                  number={pokemon.id}
                  name={pokemon.details.name[0].toUpperCase() + pokemon.details.name.substr(1)}
                  types={pokemon.details.types}
                  image={pokemon.details.sprites.front_default}
                  pokemonSpecie={pokemon.details.species.url}
                />
              </Link>
            ))
          )}
        </div>
      </div>
      <BottomNavbar />
    </section>
  );
};

export default FavoritiesPokemonsCard;