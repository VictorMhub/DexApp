import BottomNavbar from "../components/BottomNavbar"
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";

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
        <h1 className="ml-2 font-semibold text-lg text-[20px]"> Favorities </h1> 
      </div>
      <BottomNavbar />
    </section>
  )
}

export default Favorites