import { Link } from "react-router-dom";
import { semiArrow } from "../assets";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const RegisterEmail = () => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const {  setGlobalUser, globalUser } = useContext(GlobalContext);

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

  useEffect(() => {
    emailRegex.test(email) ? setDisabled(false) : setDisabled(true);
  }, [email]);

  return (
    <section className="flex flex-col sm:py-15 py-5 h-full">
      <div className="w-full flex items-center">
        <Link to="/signup">
          <img className="w-[38px]" src={semiArrow} alt="semi-arrow" />
        </Link>
        <div className="w-full justify-center">
          <p className="text-center font-poppins font-semibold text-[20px] pr-[29px]">
            Criar conta
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 w-full">
        <h4 className="font-poppins font-normal text-[26px] text-center text-gray-700">
          Vamos começar!{" "}
        </h4>
        <h1 className="font-poppins font-semibold text-[26px] text-center">
          {" "}
          Qual é o seu e-mail?
        </h1>
      </div>

      <div className="flex flex-col items-center w-full">
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className="border-2 w-[328px] h-[52px] border-gray-400 rounded-md placeholder:text-gray-500 pl-[20px]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <h4 className="font-poppins font-normal text-[12px] text-gray-700">
          Use um endereço de e-mail válido.
        </h4>
      </div>

      <div className="flex flex-col items-center w-full pt-[480px]">
        <Link to="/register/password">
          <button
            className={
              disabled
                ? "w-[328px] h-[58px] items-center bg-gray-200 text-gray-500 text-center rounded-full font-semibold text-[18px] font-poppins"
                : "w-[328px] h-[58px] items-center bg-blue-900 text-white text-center rounded-full font-semibold text-[18px] font-poppins"
            }
            disabled={disabled}
            onClick={() => setGlobalUser({...globalUser, email})}
          >
            Continuar
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RegisterEmail;
