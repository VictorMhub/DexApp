import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { kantoBg, squirtlePNG, bulbaPNG,charmanderPNG, JohtoBg,
  KalosBg,
  HoennBg,
  SinnohBg,
  UnovaBg,
  GalarBg,
  AlolaBg,
  chikoritaPNG,
  cyndaquilPNG,
  tortodilePNG,
  TreeckoPNG,
  MudkipPNG,
  TorchicPNG,
  TurtwigPNG,
  ChimcharPNG,
  PiplupPNG,
  SnivyPNG,
  TepigPNG,
  OshawottPNG,
  ChespinPNG,
  FennekinPNG,
  FroakiePNG,
  RowletPNG,
  LittenPNG,
  PopplioPNG,
  GrookeyPNG,
  ScorbunnyPNG,
  SobblePNG,
 } from "../assets/index";
import { GlobalContext } from "../context/globalContext";
const RegionsCard = () => {
  const {handlePokemonsByRegions} = useContext(GlobalContext)
  return (
    <div className="w-full items-center">
      <div className="w-full flex items-center h-[67px] border-2">
        <h1 className="ml-2 font-semibold text-lg text-[18px]"> Regions </h1> 
      </div>
      <section className="flex flex-col items-center w-full h-[970px] rounded-[15px] gap-[12px] pb-[70px] pt-[15px]">
        <Link to={`/pokedex/kanto`}
        onClick={() => handlePokemonsByRegions(151, 0)}
        >
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${kantoBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              KANTO
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              1º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={bulbaPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={charmanderPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={squirtlePNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/johto"}
         onClick={() => handlePokemonsByRegions(100, 151)}
        >
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${JohtoBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              Johto
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              2º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={chikoritaPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={cyndaquilPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={tortodilePNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/hoenn"}
        onClick={() => handlePokemonsByRegions(135, 251)}
        >
       <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${HoennBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              HOENN
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              3º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={TreeckoPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={TorchicPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={MudkipPNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/sinnoh"}
        onClick={() => handlePokemonsByRegions(107, 386)}
        >
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${SinnohBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              SINNOH
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              4º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={TurtwigPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={ChimcharPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={PiplupPNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/unova"}
        onClick={() => handlePokemonsByRegions(155, 493)}>
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${UnovaBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              UNOVA
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              5º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={SnivyPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={TepigPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={OshawottPNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/kalos"}
        onClick={() => handlePokemonsByRegions(72, 649)}>
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${KalosBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              KALOS
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              6º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={ChespinPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={FennekinPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={FroakiePNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/alola"}
        onClick={() => handlePokemonsByRegions(88, 721)}>
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${AlolaBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              ALOLA
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              7º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={RowletPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={LittenPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={PopplioPNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
        <Link to={"/pokedex/galar"}
        onClick={() => handlePokemonsByRegions(81, 809)}>
        <div
          className="w-[328px] h-[102px] rounded-[15px] bg-white bg-cover bg-center flex flex-row items-center"
          style={{ backgroundImage: `url(${GalarBg})` }}
        >
          <div className="flex flex-col pl-[24px] h-[43px]">
            <h3 className="font-poppins font-semibold text-[18px] text-white w-[71px] h-[43px]">
              GALAR
            </h3>
            <h4 className="font-poppins font-medium text-[11px] text-white w-[71px] h-[43px] mb-[10px] leading-[16.5px]">
              7º Geração
            </h4>
          </div>
          <div className="w-[167px] h-[52px] pt-[25px] items-center flex pb-[40px]">
              <img className="w-[63px] h-[52px]" src={GrookeyPNG} alt="Bulbasaur PNG" />
              <img className="w-[63px] h-[52px]" src={ScorbunnyPNG} alt="Charmander PNG" />
              <img className="w-[63px] h-[52px]" src={SobblePNG} alt="Squirtle PNG" />
          </div>
        </div>
        </Link>
      </section>
    </div>
  );
};

export default RegionsCard;
