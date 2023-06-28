import {
  dynamicBackground,
  dynamicBackgroundOpacity,
  dynamicBackgroundVector,
  dynamicBackgroundType,
  dynamicTypeIcon,
} from "../utils/stylesFunctions";


const PokemonCard = ({ number, name, types, image }) => {
  return (
    <div
      className={`flex flex-row items-center ${dynamicBackgroundOpacity(
        types
      )} w-[328px] h-[102px] rounded-2xl mt-[12px]`}
    >
      <div className="flex flex-col justify-center items-start infos">
        <div className="flex flex-col items-start w-[176.24px]">
          <h3 className="font-poppins font-semibold text-[12px] text-gray-500">
            {`Nº${number}`}
          </h3>
          <h1 className="font-poppins font-semibold text-[21px]">{name}</h1>
        </div>

        <div className="flex flex-row items-start gap-[4px] w-[176.24px]h-[26.12px]">
          {types.map((pokemonType, index) => (
            
            <div
              className={`flex items-center justify-center flex-row ${dynamicBackgroundType(pokemonType)} rounded-full gap-[5.8px] w-[82.12px] h-[30.12px]`}
              key={index}
            > 
              <div className="w-[20.20px] h-[20.20px] bg-white rounded-full flex justify-center items-center mr-[1px]">
                <img src={dynamicTypeIcon(pokemonType)} alt="" className="w-[13.06px] h-[13.06px] rounded-full bg-white"/>
              </div>            
              <p className="font-poppins font-medium text-[12.30px]">
                {pokemonType.type.name[0].toUpperCase() + pokemonType.type.name.substr(1)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-[150px] h-[102px] pl-[9.76px] ${dynamicBackground(
          types
        )} rounded-2xl flex items-center justify-center relative bg-cover`}
      >
        <img
          src={dynamicBackgroundVector(types)}
          alt={`${types}`}
          className="absolute w-[83px] h-[90.54] object-cover z-0 opacity-70"
        />
        <img
          src={image}
          alt={`${name} image`}
          className="w-[120px] h-[120px] z-50"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
