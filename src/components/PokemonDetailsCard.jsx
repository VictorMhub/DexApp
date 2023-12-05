import React from "react";
import { dynamicBackground, dynamicBackgroundVector } from "../utils/stylesFunctions";

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
    className={`w-[500px] h-[307px] pl-[9.76px] ${dynamicBackground(
      types
    )} flex items-center justify-center relative rounded-b-[400px]`}
  >
    <img
          src={dynamicBackgroundVector(types)}
          alt={`${types[0].type.name}`}
          className="absolute w-[100px] h-[204px] object-cover z-0 opacity-70"
    />
    <img
      src={img}
      alt={`${name} image`}
      className="w-[202.23px] h-[224.87px] z-50"
    />
  </div>
  );
};

export default PokemonDetailsCard;
