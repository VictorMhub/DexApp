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
    <section>
        <BottomNavbar />
    </section>
  )
}

export default Favorites