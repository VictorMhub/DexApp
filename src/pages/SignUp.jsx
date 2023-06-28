import React from "react";
import { semiArrow, wallace, apple, google } from "../assets";
import { Link } from "react-router-dom";

const SignUp = () => (
  <section className="flex flex-col sm:py-15 py-5 items-center">
    <div className="w-full flex items-center">
      <Link to="/">
        <img className="w-[38px]" src={semiArrow} alt="semi-arrow" />
      </Link>
      <div className="w-full justify-center">
        <p className="text-center font-poppins font-semibold text-[20px] pr-[29px]">
          Criar conta
        </p>
      </div>
    </div>

    <img className="py-6 w-[266px]" src={wallace} alt="" />

    <div className="flex flex-col items-start py-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-medium text-[27px] text-center font-poppins">
          Falta pouco para explorar esse mundo!
        </h1>
        <p className="font-poppins font-normal text-[15px] text-center text-gray-600 py-3">
          Como deseja se conectar?
        </p>
      </div>

      <div className="flex flex-col items-center pt-[25px] gap-[2px] w-full">
        <Link to="/">
          <div className="flex items-center flex-row border-2 rounded-full w-[328px] h-[60px]">
            <img className="pl-[30px] w-[60px]" src={apple} alt="" />
            <div className="w-full justify-center items-center flex">
              <p className="text-center font-poppins font-semibold font-[16px] text-gray-700">
                Continuar com a apple
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center pt-[25px] gap-[2px] w-full">
        <Link to="/">
          <div className="flex items-center flex-row border-2 rounded-full w-[328px] h-[60px]">
            <img className="pl-[30px] w-[60px]" src={google} alt="" />
            <div className="w-full justify-center items-center flex">
              <p className="text-center font-poppins font-semibold font-[16px] text-gray-700">
                Continuar com o google
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center pt-[20px] gap-[4px] w-full">
        <Link to="/register/email">
          <button className="w-[328px] h-[58px] items-center bg-blue-900 text-white text-center rounded-full font-semibold text-[18px] font-poppins">
            Continuar com um e-mail
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default SignUp;
