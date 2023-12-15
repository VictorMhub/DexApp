import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext, useState } from "react";
import { Group } from "../assets";
import { dynamicBackground } from "../utils/stylesFunctions";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import Loading from "../components/Loading";

const PokemonDetails = () => {
  const endpoint = localStorage.getItem('endpoint');
  const species = localStorage.getItem('species');
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [pokemonSpecie, setPokemonSpecie] = useState([]);
  const { types, sprites, id, name, weight
, height, abilities  } = pokemonDetails;
  const {flavor_text_entries, egg_groups, genera} = pokemonSpecie;
  console.log(genera);
  useEffect(() => {
    const fetchPokemonDetail = () => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setPokemonDetails(data));
    };
    const fetchPokemonSpecie = () =>{
      fetch(species)
      .then((response) => response.json())
      .then((data) => setPokemonSpecie(data))
    }
    fetchPokemonDetail();
    fetchPokemonSpecie();
  }, [])
  return (
    <section className="flex flex-col w-full">
        <div className="flex flex-col  w-full items-center">
        {pokemonDetails.length === 0 || pokemonSpecie.length === 0 ? <Loading /> : <PokemonDetailsCard name={name} types={types} img={sprites.front_default} number={id} description={flavor_text_entries} ability={abilities} height={height} weight={weight} category={genera}/> }
        </div>
    </section>
  )
}

export default PokemonDetails