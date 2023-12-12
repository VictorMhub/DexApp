import React from "react";
import { dynamicBackground, dynamicBackgroundVector, dynamicBackgroundType, dynamicTypeIcon } from "../utils/stylesFunctions";
import {  semiArrowWhite, favWhite } from '../assets';
import { Link } from "react-router-dom";

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
  number,
}) => {
  console.log(description[0].flavor_text);
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
    <div className="w-[388px] flex flex-row place-content-between items-cente items-cente">
        <div className="flex flex-col">
            <p>PESO</p>
        </div>
        <div className="flex flex-col">
            <p>ALTURA</p>
        </div>
    </div>
  </section>
  </>
  );
};

export default PokemonDetailsCard;
