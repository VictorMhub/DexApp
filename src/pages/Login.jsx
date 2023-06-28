import { semiArrow } from "../assets";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
  const user = JSON.parse(localStorage.getItem("user"))


  const handleButton = () => {
    if(email != user.email || password != user.password) {
        setError(true)
    } else {
        setError(false)
    }
  }

  useEffect(() => {
    emailRegex.test(email) && password.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [email, password]);

  return (
    <section className="flex flex-col sm:py-15 py-5 h-full">
      <div className="w-full flex items-center">
        <Link to="/">
          <img className="w-[38px]" src={semiArrow} alt="semi-arrow" />
        </Link>
        <div className="w-full justify-center">
          <p className="text-center font-poppins font-semibold text-[20px] pr-[29px]">
            Entrar
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center py-10 w-full">
        <h4 className="font-poppins font-normal text-[26px] text-center text-gray-700">
          Bem vindo de volta!{" "}
        </h4>
        <h1 className="font-poppins font-semibold text-[26px] text-center">
          {" "}
          Preencha os dados{" "}
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start">
          <label
            htmlFor="e-mail"
            className="font-poppins font-semibold text-[14px] mb-[12px]"
          >
            E-mail
          </label>
          <input
            type="text"
            name="e-mail"
            id="e-mail"
            placeholder="E-mail"
            className="border-2 w-[328px] h-[52px] border-gray-400 rounded-md placeholder:text-gray-500 pl-[20px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start">
          <label
            htmlFor="password"
            className="font-poppins font-semibold text-[14px] mb-[12px] pt-[15px]"
          >
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            className="border-2 w-[328px] h-[52px] border-gray-400 rounded-md placeholder:text-gray-500 pl-[20px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/">
          <p className="font-poppins font-medium text-[14px] text-blue-900 mt-[15px]">
            Esqueceu sua senha?
          </p>
        </Link>
        {
            !error ? <span></span> : <span className="font-poppins font-medium text-[14px] text-red-800 mt-[15px]">Email ou senha inválidos</span>
        }
      </div>
      <div className="flex flex-col items-center w-full pt-[300px]">
        <Link to="/pokedex">
        <button
          className={
            disabled
              ? "w-[328px] h-[58px] items-center bg-gray-200 text-gray-500 text-center rounded-full font-semibold text-[18px] font-poppins"
              : "w-[328px] h-[58px] items-center bg-blue-900 text-white text-center rounded-full font-semibold text-[18px] font-poppins"
          }
          disabled={disabled}
          onClick={() => handleButton()}
        >
          Entrar
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
