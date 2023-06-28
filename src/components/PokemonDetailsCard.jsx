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
    className={`w-[360px] h-[307px] pl-[9.76px] ${dynamicBackground(
      types
    )} flex items-center justify-center relative bg-cover rounded-b-[50px]`}
  >
    <img
      src={img}
      alt={`${name} image`}
      className="w-[200.23px] h-[210.87px] z-50"
    />
  </div>
  );
};

export default PokemonDetailsCard;
