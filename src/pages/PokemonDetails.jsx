import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext, useState } from "react";
import { Group } from "../assets";
import { dynamicBackground } from "../utils/stylesFunctions";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import Loading from "../components/Loading";

const PokemonDetails = () => {
  const endpoint = localStorage.getItem('endpoint');
  const [pokemonDetails, setPokemonDetails] = useState([])
  const { types } = pokemonDetails;
  const { sprites } = pokemonDetails
  
  useEffect(() => {
    const fetchPokemonDetail = () => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setPokemonDetails(data));
    };

    fetchPokemonDetail();
  }, [])
  return (
    <section className="flex flex-col w-full">
        <div className="flex flex-col  w-full items-center">
        {pokemonDetails === undefined || pokemonDetails.length === 0 ? <Loading /> : <PokemonDetailsCard name={pokemonDetails.name} types={types} img={sprites.front_default}/> }
        </div>
    </section>
  )
}

export default PokemonDetails