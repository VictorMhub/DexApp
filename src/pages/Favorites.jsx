import BottomNavbar from "../components/BottomNavbar"
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
import { Dinossaurguy } from "../assets";
import { Link } from "react-router-dom";

const Favorites = () => {
  const {
    setToggleDex,
    setToggleReg,
    setToggleFav,
    setToggleAcc,
  } = useContext(GlobalContext)

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
      <div className=" w-[327px] flex flex-col items-center pt-[10px] gap-[20px]">
        <img src={Dinossaurguy} className="w-[307px] h-[307px]" alt="Dinossaur Guy" />
        <h1 className="font-semibold font-poppins text-[20px] text-center">Você precisa entrar em uma conta para fazer isso.</h1>
        <p className="font-normal	font-poppins text-[14px] text-center">Para acessar essa funcionalidade, é necessário fazer login ou criar uma conta. Faça isso agora!</p>
        <Link to="/">
            <div className="flex items-center flex-row border-2 rounded-full border-blue-900 w-[328px] h-[60px] mt-[35px]">
              <div className="w-full justify-center items-center flex">
                <p className="text-center font-poppins font-semibold font-[18px] text-blue-900">
                  Entre ou Cadastre-se
                </p>
              </div>
            </div>
          </Link>
      </div>
      <BottomNavbar />
    </section>
  )
}

export default Favorites