import {
  pokedex,
  fav,
  perfil,
  região,
  toggledPokedex,
  toggledAcc,
  toggledReg,
  toggledFav,
} from "../assets";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const BottomNavbar = () => {
  const {
    toggleDex,
    setToggleDex,
    toggleFav,
    setToggleFav,
    toggleReg,
    setToggleReg,
    toggleAcc,
    setToggleAcc,
    globalUser,
  } = useContext(GlobalContext);
  const { user, status } = globalUser;
  // console.log(status);
  const handdleClick = (e) => {
    if (e.target.id === "pokedex") {
      setToggleDex(true);
    } else {
      setToggleDex(false);
    }

    if (e.target.id === "região") {
      setToggleReg(true);
    } else {
      setToggleReg(false);
    }

    if (e.target.id === "favoritos") {
      setToggleFav(true);
    } else {
      setToggleFav(false);
    }

    if (e.target.id === "conta") {
      setToggleAcc(true);
    } else {
      setToggleAcc(false);
    }
  };

  return (
    <nav className="border-2 w-full h-[72px] overflow-x-auto flex fixed bottom-0 z-50 bg-white">
      <Link
        className="flex flex-col items-center justify-center grow overflow-hidden whitespace-nowrap"
        onClick={(e) => handdleClick(e)}
        id="pokedex"
        to="/pokedex"
      >
        <img
          src={toggleDex ? toggledPokedex : pokedex}
          alt=""
          className="w-[25.67px] h-[25.67px]"
          id="pokedex"
        />
        <span
          className={`font-poppins font-medium text-[12px] text-blue-800 ${
            toggleDex ? "" : "hidden"
          }`}
          id="pokedex"
        >
          Pokedéx
        </span>
      </Link>

      <Link
        className="flex flex-col items-center justify-center grow overflow-hidden whitespace-nowrap"
        id="região"
        onClick={(e) => handdleClick(e)}
        to="/regions"
      >
        <img
          src={toggleReg ? toggledReg : região}
          alt=""
          className="w-[25.67px] h-[25.67px]"
          id="região"
        />
        <span
          className={`font-poppins font-medium text-[12px] text-blue-800 ${
            toggleReg ? "" : "hidden"
          }`}
          id="região"
        >
          Região
        </span>
      </Link>

      <Link
        className="flex flex-col items-center justify-center grow overflow-hidden whitespace-nowrap"
        id="favoritos"
        onClick={(e) => handdleClick(e)}
        to={status === "logged" ? `/${user}/favorites` : "/favorites"}
      >
        <img
          src={toggleFav ? toggledFav : fav}
          alt=""
          className="w-[25.67px] h-[25.67px]"
          id="favoritos"
        />
        <span
          className={`font-poppins font-medium text-[12px] text-blue-800 ${
            toggleFav ? "" : "hidden"
          }`}
          id="favoritos"
        >
          Favoritos
        </span>
      </Link>

      <Link
        className="flex flex-col items-center justify-center grow overflow-hidden whitespace-nowrap"
        id="conta"
        onClick={(e) => handdleClick(e)}
        to={status === "logged" ? `/${user}/profile` : "/profile"}
      >
        <img
          src={toggleAcc ? toggledAcc : perfil}
          alt=""
          className="w-[25.67px] h-[25.67px]"
          id="conta"
        />
        <span
          className={`font-poppins font-medium text-[12px] text-blue-800 ${
            toggleAcc ? "" : "hidden"
          }`}
          id="conta"
        >
          Conta
        </span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
