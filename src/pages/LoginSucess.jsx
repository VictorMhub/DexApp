import { cynthia, garry } from "../assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { GlobalContext } from "../context/globalContext";

const LoginSucess = () => {
//   const { globalUser } = useContext(GlobalContext);

  return (
    <section className="flex flex-col sm:py-15 py-5 h-full">
      <div className="flex justify-center items-center xl:px-0 sm:px-16 px-6 pt-[158px]">
        <img
          className="w-[210px] h-[255.1px] left-[21px] top-[178px] self-center"
          src={garry}
          alt="hilda"
        />
        <img
          className="w-[225px] h-[262.86px] left-[150px] top-[167px] self-center"
          src={cynthia}
          alt="hilbert"
        />
      </div>

      <div className="flex flex-col items-center py-10 w-full">
        <h1 className="font-poppins font-medium text-[26px] text-center">
          {" "}
          Bem-vindo de volta, Treinador!{" "}
        </h1>
        <h4 className="font-poppins font-normal	text-[14px] text-center text-gray-700 mt-[30px]">
          Esperamos que tenha tido uma longa jornada desde a última vez em que nos visitou.
        </h4>
        <Link to="/pokedex">
        <button
          className="w-[328px] h-[58px] items-center bg-blue-900 text-white text-center rounded-full font-semibold text-[18px] font-poppins mt-[50px]"
        >
          Continuar
        </button>
        </Link>
      </div>
    </section>
  );
};

export default LoginSucess;
