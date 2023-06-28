import BottomNavbar from "../components/BottomNavbar"
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
const Profile = () => {
  const {
    setToggleDex,
    setToggleReg,
    setToggleFav,
    setToggleAcc,
  } = useContext(GlobalContext)

  useEffect(() => {
    setToggleDex(false)
    setToggleAcc(true)
    setToggleFav(false)
    setToggleReg(false)
  }, [])

  return (
    <section>
        <BottomNavbar />
    </section>
  )
}

export default Profile