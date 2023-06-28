import BottomNavbar from "../components/BottomNavbar"
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";

const Regions = () => {
  const {
    setToggleDex,
    setToggleReg,
    setToggleFav,
    setToggleAcc,
  } = useContext(GlobalContext)

  useEffect(() => {
    setToggleDex(false)
    setToggleAcc(false)
    setToggleFav(false)
    setToggleReg(true)
  }, [])
  return (
    <section>
        <BottomNavbar />
    </section>
  )
}

export default Regions