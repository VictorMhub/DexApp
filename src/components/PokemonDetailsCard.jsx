import React from "react";
import { dynamicBackground, dynamicBackgroundVector, dynamicBackgroundType, dynamicTypeIcon } from "../utils/stylesFunctions";
import {  semiArrowWhite, favWhite, weightIcon, heightIcon, habilityIcon,categoryIcon } from '../assets';
import { Link } from "react-router-dom";

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
  weekness,
  evolutions,
  number,
}) => {
  console.log();
  return (
    <>
    <section
    className={`w-full h-[250px] pl-[9.76px] ${dynamicBackground(types)} flex flex-col items-center justify-center relative rounded-b-[400px]`}
  >
     <nav className='w-full flex py-6 place-content-between items-center'>
            <Link to="/pokedex">
            <img className='w-[26px] h-[26px]' src={ semiArrowWhite } alt="semiArrow" />
            </Link>
            <img src={favWhite} alt="Favorite Icon" className="w-[26px] h-[26px] flex mr-[20px]"/>
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
    <h1 className="font-poppins font-semibold text-[32px]">{ name[0].toUpperCase() + name.substr(1) }</h1>
    <h3 className="font-poppins font-semibold text-[16px] text-gray-600 ml-[3px]">
            {`Nº ${number}`}
    </h3>
    <div className="flex flex-row items-start gap-[4px] w-[176.24px]h-[26.12px]">
          {types.map((pokemonType, index) => (
            
            <div
              className={`flex items-center justify-center flex-row ${dynamicBackgroundType(pokemonType)} rounded-full gap-[5.8px] w-[114px] h-[36px]`}
              key={index}
            > 
              <div className="w-[20.20px] h-[20.20px] bg-white rounded-full flex justify-center items-center mr-[1px]">
                <img src={dynamicTypeIcon(pokemonType)} alt="" className="w-[15px] h-[15px] rounded-full bg-white"/>
              </div>            
              <p className="font-poppins font-medium text-[18px]">
                {pokemonType.type.name[0].toUpperCase() + pokemonType.type.name.substr(1)}
              </p>
            </div>
          ))}
    </div>
    <p className="font-poppins font-normal text-[16px] text-gray-800 mt-[16px] leading-[20.3px]">
      {description[1].flavor_text}
    </p>
    <section className="flex flex-col w-full items-center mt-[15px]">
      <div className="w-full flex flex-row  items-center">
          <div className="w-[154px] h-[63px] flex flex-col mr-[25px]">
              <div className="flex flex-row">
                <img className="w-[18px] h-[18px] mr-[6px] mt-[3px]" src={weightIcon} alt="weight-icon" />
                <p className="font-medium font-poppins text-[15px] text-gray-600">WEIGHT</p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[18px] text-neutral-950">{weight} kg</p>
              </div>
          </div>
          <div className="w-[154px] h-[63px] flex flex-col">
              <div className="flex flex-row">
                <img className="w-[16px] h-[16px] mr-[6px] mt-[3px]" src={heightIcon} alt="height-icon" />
                <p className="font-medium font-poppins text-[15px] text-gray-600">HEIGHT</p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[18px] text-neutral-950">{height} m</p>
              </div>
          </div>
      </div>
      <div className="w-full flex flex-row  items-center">
          <div className="w-[154px] h-[63px] flex flex-col mr-[25px]">
              <div className="flex flex-row">
                <img className="w-[16px] h-[16px] mr-[6px] mt-[3px]" src={habilityIcon} alt="egggroup-icon" />
                <p className="font-medium font-poppins text-[15px] text-gray-600">EGG GROUP</p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[18px] text-neutral-950">{category[0].name[0].toUpperCase() + category[0].name.substr(1)}</p>
              </div>
          </div>
          <div className="w-[154px] h-[63px] flex flex-col">
              <div className="flex flex-row">
                <img className="w-[16px] h-[16px] mr-[6px] mt-[3px]" src={habilityIcon} alt="ability-icon" />
                <p className="font-medium font-poppins text-[15px] text-gray-600">ABILITY</p>
              </div>
              <div className="h-[43px] border-2 border-gray-300 rounded-[15px] flex items-center justify-center">
                <p className="text-center font-poppins font-medium leading-[27px] text-[18px] text-neutral-950">{ability[0].ability.name[0].toUpperCase() + ability[0].ability.name.substr(1)}</p>
              </div>
          </div>
      </div>
    </section>
  </section>
  </>
  );
};

export default PokemonDetailsCard;
