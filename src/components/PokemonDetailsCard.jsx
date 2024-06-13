import React from "react";
import {
  dynamicBackground,
  dynamicBackgroundVector,
  dynamicBackgroundType,
  dynamicTypeIcon,
  dynamicBackgroundTypeForWeaknesses,
  dynamicTypeIconForWeaknesses,
} from "../utils/stylesFunctions";
import {
  semiArrowWhite,
  favWhite,
  weightIcon,
  heightIcon,
  habilityIcon,
  categoryIcon,
  toggledFav,
  favRed,
} from "../assets";
import { Link, useNavigate } from "react-router-dom";
import BarraPorcentagem from "../components/GenderBar";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";

const PokemonDetailsCard = ({
  img,
  types,
  name,
  description,
  weight,
  height,
  category,
  ability,
  gender,
  weaknesses,
  evolutions,
  number,
  pokemonSpecie,
  pokemonId,
  pokemonDetails,
}) => {
  const { toggleFav, setToggleFav, setFavoritiesPokemon, favoritiesPokemon } =
    useContext(GlobalContext);
  const handleClick = (e) => {
    setFavoritiesPokemon((prevFavPokemon) => {
      // Verifica se o Pokémon já está na lista de favoritos
      const isAlreadyFavorited = prevFavPokemon.some(
        (pokemon) => pokemon.id === pokemonId
      );

      if (isAlreadyFavorited) {
        // Remove o Pokémon da lista de favoritos
        const newFavPokemon = prevFavPokemon.filter(
          (pokemon) => pokemon.id !== pokemonId
        );
        return newFavPokemon;
      } else {
        // Adiciona o Pokémon à lista de favoritos
        return [...prevFavPokemon, { id: pokemonId, specie: pokemonSpecie, details: pokemonDetails}];
      }
    });

    // Atualiza o estado do botão de favorito
    if (e.target.id === "fav") {
      setToggleFav((prevToggleFav) => !prevToggleFav);
    }
  };
  useEffect(() => {
    const isFavorited = favoritiesPokemon.some(
      (pokemon) => pokemon.id === pokemonId
    );
    setToggleFav(isFavorited);
  }, [favoritiesPokemon, pokemonId]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section
        className={`w-full h-[250px] pl-[9.76px] ${dynamicBackground(
          types
        )} flex flex-col items-center justify-center relative rounded-b-[400px]`}
      >
        <nav className="w-full flex py-6 place-content-between items-center">
            <img
              className="w-[26px] h-[26px]"
              src={semiArrowWhite}
              alt="semiArrow"
              onClick={() => navigate(-1)}
            />
          <img
            src={toggleFav ? favRed : favWhite}
            alt="Favorite Icon"
            className="w-[26px] h-[26px] flex mr-[20px]"
            id="fav"
            onClick={(e) => handleClick(e)}
          />
        </nav>
        <img
          src={dynamicBackgroundVector(types)}
          alt={`${types[0].type.name}`}
          className="absolute w-[210px] h-[200px] z-0 opacity-70 pr-[22px]"
        />
        <img
          src={img}
          alt={`${name} image`}
          className="w-[202.23px] h-[220.87px] z-50 pt-[20px]"
        />
      </section>
      <section className="w-full flex flex-col items-start gap-[5px] pl-[26px]">
        <h1 className="font-poppins font-semibold text-[32px]">
          {name[0].toUpperCase() + name.substr(1)}
        </h1>
        <h3 className="font-poppins font-semibold text-[16px] text-gray-600 ml-[3px]">
          {`Nº ${number}`}
        </h3>
        <div className="flex flex-row items-start gap-[4px] w-[176.24px]h-[26.12px]">
          {types.map((pokemonType, index) => (
            <div
              className={`flex items-center justify-center flex-row ${dynamicBackgroundType(
                pokemonType
              )} rounded-full gap-[5.8px] w-[114px] h-[36px]`}
              key={index}
            >
              <div className="w-[20.20px] h-[20.20px] bg-white rounded-full flex justify-center items-center mr-[1px]">
                <img
                  src={dynamicTypeIcon(pokemonType)}
                  alt=""
                  className="w-[15px] h-[15px] rounded-full bg-white"
                />
              </div>
              <p className="font-poppins font-medium text-[15px]">
                {pokemonType.type.name[0].toUpperCase() +
                  pokemonType.type.name.substr(1)}
              </p>
            </div>
          ))}
        </div>
        <p className="font-poppins font-normal text-[16px] text-gray-800 mt-[16px] leading-[20.3px]">
          {description[6].flavor_text}
        </p>
        <section className="flex flex-col w-full items-center mt-[15px]">
          <div className="w-full flex flex-row  items-center">
            <div className="w-[154px] h-[63px] flex flex-col mr-[25px]">
              <div className="flex flex-row">
                <img
                  className="w-[18px] h-[18px] mr-[6px] mt-[3px]"
                  src={weightIcon}
                  alt="weight-icon"
                />
                <p className="font-medium font-poppins text-[15px] text-gray-600">
                  WEIGHT
                </p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[15] text-neutral-950">
                  {weight} kg
                </p>
              </div>
            </div>
            <div className="w-[154px] h-[63px] flex flex-col">
              <div className="flex flex-row">
                <img
                  className="w-[16px] h-[16px] mr-[6px] mt-[3px]"
                  src={heightIcon}
                  alt="height-icon"
                />
                <p className="font-medium font-poppins text-[15px] text-gray-600">
                  HEIGHT
                </p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[15] text-neutral-950">
                  {height} m
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row  items-center">
            <div className="w-[154px] h-[63px] flex flex-col mr-[25px]">
              <div className="flex flex-row">
                <img
                  className="w-[16px] h-[16px] mr-[6px] mt-[3px]"
                  src={habilityIcon}
                  alt="egggroup-icon"
                />
                <p className="font-medium font-poppins text-[15px] text-gray-600">
                  CATEGORIE
                </p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[14px] text-neutral-950">
                  {category[7].genus}
                </p>
              </div>
            </div>
            <div className="w-[154px] h-[63px] flex flex-col">
              <div className="flex flex-row">
                <img
                  className="w-[16px] h-[16px] mr-[6px] mt-[3px]"
                  src={habilityIcon}
                  alt="ability-icon"
                />
                <p className="font-medium font-poppins text-[15px] text-gray-600">
                  ABILITY
                </p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[14px] text-neutral-950">
                  {ability[0].ability.name[0].toUpperCase() +
                    ability[0].ability.name.substr(1)}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full items-start mt-[15px] mr-[25px]">
          <BarraPorcentagem genderRate={gender} />
        </section>
        <section className="w-full flex flex-col items-start gap-[5px]">
          <p className="font-poppins font-semibold text-[18px]">Weaknesses</p>
          <div className="flex flex-wrap items-start gap-[4px]">
            {weaknesses.map((pokemonWeaknesses, index) => (
              <div
                className={`flex items-center justify-center flex-row ${dynamicBackgroundTypeForWeaknesses(
                  pokemonWeaknesses
                )} rounded-full gap-[5.8px] w-[114px] h-[36px]`}
                key={index}
              >
                <div className="w-[20.20px] h-[20.20px] bg-white rounded-full flex justify-center items-center mr-[1px]">
                  <img
                    src={dynamicTypeIconForWeaknesses(pokemonWeaknesses)}
                    alt=""
                    className="w-[15px] h-[15px] rounded-full bg-white"
                  />
                </div>
                <p className="font-poppins font-medium text-[15px]">
                  {pokemonWeaknesses[0].toUpperCase() +
                    pokemonWeaknesses.substr(1)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* <section className="w-full flex flex-col items-start gap-[5px]">
          <p className="font-poppins font-semibold text-[18px] pt-[28px]">
            Evolutions
          </p>
          <div className="flex flex-col border-2 border-gray-300 rounded-[15px] w-[328px] items-center">
            <div className="flex flex-row w-[296px] h-[76px] border-2 border-gray-300 rounded-[90px]">
              <div className="flex flex-row justify-center items-start infos">
                <div
                  className={`flex flex-row  ${dynamicBackground(
                    types
                  )} items-center w-[96px] h-[74px] rounded-[90px]`}
                >
                  <img
                    src={img}
                    alt={`${name} image`}
                    className="w-[108px] h-[81px] z-50"
                  />
                </div>
                <div className="w-[140px] h-[56px] flex flex-col items-start pl-[26px]">
                  <h1 className="font-poppins font-semibold text-[16px]">
                    {name[0].toUpperCase() + name.substr(1)}
                  </h1>
                  <h3 className="font-poppins font-semibold text-[16px] text-gray-600 ml-[3px]">
                    {`Nº ${number}`}
                  </h3>
                  <div className="flex flex-row items-start gap-[4px] w-[176.24px]h-[26.12px]">
                    {types.map((pokemonType, index) => (
                      <div
                        className={`flex items-center justify-center flex-row ${dynamicBackgroundType(
                          pokemonType
                        )} rounded-full gap-[5.8px] w-[68px] h-[13px]`}
                        key={index}
                      >
                        <div className="w-[11] h-[11] bg-white rounded-full flex justify-center items-center mr-[1px]">
                          <img
                            src={dynamicTypeIcon(pokemonType)}
                            alt=""
                            className="w-[10px] h-[10px] rounded-full bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
};

export default PokemonDetailsCard;
