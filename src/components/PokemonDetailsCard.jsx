import React from "react";
import { dynamicBackground, dynamicBackgroundVector } from "../utils/stylesFunctions";
import {  semiArrow } from '../assets'

const PokemonDetailsCard = ({
  img,
  types,
  name,
  description,
  wheight,
  height,
  category,
  hability,
  gender,
  weekness,
  evolutions,
}) => {
  return (
    <div
    className={`w-[500px] h-[307px] pl-[9.76px] ${dynamicBackground(types)} flex flex-col items-center justify-center relative rounded-b-[400px]`}
  >
     <nav className='w-full flex py-6 justify-start items-center'>
            <img className='w-[26px] h-[26px]' src={ semiArrow } alt="arrow" />
    </nav>
    <img
          src={dynamicBackgroundVector(types)}
          alt={`${types[0].type.name}`}
          className="absolute w-[160px] h-[160px] object-cover z-0 opacity-70"
    />
    <img
      src={img}
      alt={`${name} image`}
      className="w-[202.23px] h-[220.87px] z-50 pt-[20px]"
    />
  </div>
  );
};

export default PokemonDetailsCard;
