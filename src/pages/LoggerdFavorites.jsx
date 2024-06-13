import BottomNavbar from "../components/BottomNavbar"
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
import { Dinossaurguy, Magikarp } from "../assets";
import { Link } from "react-router-dom";
import FavoritiesPokemonsCard from "../components/FavoritiesPokemonsCard";

const LoggedFavorites = () => {
  const {
    setToggleDex,
    setToggleReg,
    setToggleFav,
    setToggleAcc,
    favoritiesPokemon,
  } = useContext(GlobalContext)
  console.log(favoritiesPokemon);

  useEffect(() => {
    setToggleDex(false)
    setToggleAcc(false)
    setToggleFav(true)
    setToggleReg(false)
  }, [])
  
  return (
    <section className="w-full flex flex-col items-center pb-[70px]">
      <div className="w-full flex items-center h-[67px] border-2">
        <h1 className="ml-2 font-semibold font-poppins text-lg text-[20px]"> Favorities </h1> 
      </div>
      {favoritiesPokemon.length === 0 ? 
      <>
      <div className="w-[327px] flex flex-col items-center pt-[150px] gap-[20px]">
        <img src={Magikarp} className="w-[185px] h-[214.87px] filter grayscale" alt="Magikarp" />
        <h1 className="font-semibold font-poppins text-[20px] text-center">Você não favoritou nenhum Pokémon :( </h1>
        <p className="font-normal	font-poppins text-[14px] text-center">Clique no ícone de coração dos seus pokémons favoritos e eles aparecerão aqui.</p>
      </div> 
      </>
      : 
      <div className="pt-[40px]">
      <FavoritiesPokemonsCard />
      </div>
      }
      <BottomNavbar />
    </section>
  )
}

export default LoggedFavorites