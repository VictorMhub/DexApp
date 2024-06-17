import React, { useEffect, useState, useContext } from "react";
import { lupe } from "../assets";
import PokemonCard from "../components/PokemonCard";
import { GlobalContext } from "../context/globalContext";
import Loading from "../components/Loading";
import BottomNavbar from "../components/BottomNavbar";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const {
    pokemons,
    sentinela,
    setLimit,
    setToggleDex,
    setToggleReg,
    setToggleFav,
    setToggleAcc,
    handlePokemonDetail,
    handlePokemonSpecies,
    handlePokemonEvolutionChain,
  } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  // const [filteredPokemon, setFilteredPokemons ] = useState([])
  const filteredPokemons =
    search.length > 0
      ? pokemons.filter((pokemon) => pokemon.name.includes(search))
      : [];
  console.log(filteredPokemons);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLimit((prev) => prev + 3);
      }
    });

    intersectionObserver.observe(document.querySelector(`#${sentinela}`));
  }, []);

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
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 p-4">
          <img
            src={lupe}
            alt="lupe"
            className="w-5 h-5 absolute left-4 pointer-events-none "
          />
          <input
            type="text"
            placeholder="Procurar Pokemon..."
            className="w-full h-[52px] pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-600"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <div className="flex flex-row items-center gap-[16px] justify-center pt-[50px]">
          <select
            name="tipos"
            id="tipos"
            className="appearance-none gap-[8px] bg-cinza rounded-full w-[195px] h-[48px] text-white font-poppins text-[18px] font-semibold text-center"
          >
            <option value="Todos os tipos">Todos os tipos</option>
            <option value="Normal">Normal</option>
            <option value="Fogo">Fogo</option>
            <option value="Água">Água</option>
            <option value="Grama">Grama</option>
            <option value="Voador">Voador</option>
            <option value="Lutador">Lutador</option>
            <option value="Venenoso">Venenoso</option>
            <option value="Elétrico">Elétrico</option>
            <option value="Terra">Terra</option>
            <option value="Pedra">Pedra</option>
            <option value="Psíquico">Psíquico</option>
            <option value="Gelo">Gelo</option>
            <option value="Inseto">Inseto</option>
            <option value="Fantasma">Fantasma</option>
            <option value="Aço">Aço</option>
            <option value="Dragão">Dragão</option>
            <option value="Sombrio">Sombrio</option>
            <option value="Fada">Fada</option>
          </select>

          <select
            name="filtros"
            id="alfabetic"
            className="appearance-none gap-[8px] bg-cinza rounded-full w-[195px] h-[48px] text-white font-poppins text-[18px] font-semibold text-center"
          >
            <option value="Menor número">Menor número</option>
            <option value="Maior número">Maior número</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        <div className="flex flex-col items-center pb-[70px]">
          {/* {pokemons.length === 0 ? (
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
                  pokemonSpecie={pokemon.species.url}
                />
              </Link>
            ))
          )} */}
          {search.length > 0
            ? filteredPokemons.map((pokemon) => (
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
                    name={
                      pokemon.name[0].toUpperCase() + pokemon.name.substr(1)
                    }
                    types={pokemon.types}
                    image={pokemon.sprites.front_default}
                    pokemonSpecie={pokemon.species.url}
                  />
                </Link>
              ))
            : pokemons.map((pokemon) => (
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
                    name={
                      pokemon.name[0].toUpperCase() + pokemon.name.substr(1)
                    }
                    types={pokemon.types}
                    image={pokemon.sprites.front_default}
                    pokemonSpecie={pokemon.species.url}
                  />
                </Link>
              ))}
          <div id={sentinela} className="w-[328px] h-[10px]" />
        </div>
      </div>
      <BottomNavbar />
    </section>
  );
};

export default Pokedex;
