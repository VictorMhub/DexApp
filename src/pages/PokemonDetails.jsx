import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext, useState } from "react";
import { Group } from "../assets";
import { dynamicBackground } from "../utils/stylesFunctions";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import Loading from "../components/Loading";

const PokemonDetails = () => {
  const endpoint = localStorage.getItem('endpoint');
  const species = localStorage.getItem('species');
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [pokemonSpecie, setPokemonSpecie] = useState({});
  const [weaknesses, setPokemonWeaknesses] = useState([]);
  const { types = [], sprites = {}, id, name, weight, height, abilities = [] } = pokemonDetails;
  const { flavor_text_entries = [], egg_groups = [], genera = [], gender_rate } = pokemonSpecie;
  console.log(types);
  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setPokemonDetails(data);
    };

    const fetchPokemonSpecie = async () => {
      const response = await fetch(species);
      const data = await response.json();
      setPokemonSpecie(data);
    };

    fetchPokemonDetail();
    fetchPokemonSpecie();
  }, [endpoint, species]);

  useEffect(() => {
    const getTypeDamageRelations = async (typeName) => {
      const ENDPOINT = `https://pokeapi.co/api/v2/type/${typeName}`;
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      console.log(data.damage_relations);
      return data.damage_relations;
  
    };

    const fetchWeaknesses = async () => {
      if (types.length === 0) return;

      const weaknessesSet = new Set();
      for (const typeInfo of types) {
        const damageRelations = await getTypeDamageRelations(typeInfo.type.name);
        if (damageRelations) {
          damageRelations.double_damage_from.forEach(weakness => {
            weaknessesSet.add(weakness.name);
          });
        }
      }
      setPokemonWeaknesses(Array.from(weaknessesSet));
    };

    fetchWeaknesses();
  }, [types]);

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col w-full items-center">
        {Object.keys(pokemonDetails).length === 0 || Object.keys(pokemonSpecie).length === 0 ? (
          <Loading />
        ) : (
          <PokemonDetailsCard
            name={name}
            types={types}
            img={sprites.front_default}
            number={id}
            description={flavor_text_entries}
            ability={abilities}
            height={height}
            weight={weight}
            category={genera}
            gender={gender_rate}
            weaknesses={weaknesses} // Passando as fraquezas para o componente de detalhes
          />
        )}
      </div>
    </section>
  );
};


export default PokemonDetails