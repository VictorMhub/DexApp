import BottomNavbar from "../components/BottomNavbar";
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
import { hilda, hilbert, google } from "../assets";
import { Link } from "react-router-dom";
import { semiArrowRight } from "../assets";
const LoggedProfile = () => {
  const { setToggleDex, setToggleReg, setToggleFav, setToggleAcc, globalUser } =
    useContext(GlobalContext);

  useEffect(() => {
    setToggleDex(false);
    setToggleAcc(true);
    setToggleFav(false);
    setToggleReg(false);
  }, []);
  const hidePassword = (password) => {
    return '•'.repeat(password.length);
  };

  return (
    <section className="w-full flex flex-col items-center pb-[72px]">
      <BottomNavbar />
      <div className="ml-4 w-full flex items-start mt-4 ">
        <span className="ml-2 font-semibold text-lg text-[20px]">{globalUser.user}</span>
      </div>
      <div className="w-full flex flex-col items-center mt-4">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-4">
            <h1 className="font-poppins font-semibold mt-4 text-lg">
              Informações da conta
            </h1>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Nome
              </h3>
              <p className="font-poppins font-normal text-sm">
                {globalUser.user}
              </p>
            </div>
            <div className="flex items-center ml-4">
              <img src={semiArrowRight} alt="Arrow" />
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Email
              </h3>
              <p className="font-poppins font-normal text-sm">
                {globalUser.email}
              </p>
            </div>
            <div className="flex items-center ml-4">
              <img src={semiArrowRight} alt="Arrow" />
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Senha
              </h3>
              <p className="font-poppins font-normal text-sm">
                {hidePassword(globalUser.password)}
              </p>
            </div>
            <div className="flex items-center ml-4">
              <img src={semiArrowRight} alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-4">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-4">
            <h1 className="font-poppins font-semibold mt-4 text-lg">
              Pokédex
            </h1>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Mega evoluções
              </h3>
              <p className="font-poppins font-normal text-sm">
                Habilita a exibição de mega evoluções.
              </p>
            </div>
            <div className="flex items-center ml-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200 ease-in-out"></div>
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full absolute left-0.5 top-0.5 peer-checked:translate-x-full peer-checked:border-white transition duration-200 ease-in-out"></div>
              </label>
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Outras formas
              </h3>
              <p className="font-poppins font-normal text-sm">
                Habilita a exibição de formas alternativas de pokémon.
              </p>
            </div>
            <div className="flex items-center ml-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200 ease-in-out"></div>
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full absolute left-0.5 top-0.5 peer-checked:translate-x-full peer-checked:border-white transition duration-200 ease-in-out"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-4">
            <h1 className="font-poppins font-semibold mt-4 text-lg">
              Notificações
            </h1>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Atualizações na pokédex
              </h3>
              <p className="font-poppins font-normal text-sm">
                Novos Pokémons, habilidades, informações, etc.
              </p>
            </div>
            <div className="flex items-center ml-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200 ease-in-out"></div>
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full absolute left-0.5 top-0.5 peer-checked:translate-x-full peer-checked:border-white transition duration-200 ease-in-out"></div>
              </label>
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Mundo Pokémon
              </h3>
              <p className="font-poppins font-normal text-sm">
                Acontecimentos e informações do mundo de pokémon.
              </p>
            </div>
            <div className="flex items-center ml-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200 ease-in-out"></div>
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full absolute left-0.5 top-0.5 peer-checked:translate-x-full peer-checked:border-white transition duration-200 ease-in-out"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-4">
            <h1 className="font-poppins font-semibold mt-4 text-lg">
              Idioma
            </h1>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Idioma da interface
              </h3>
              <p className="font-poppins font-normal text-sm">
                Português (PT-BR)
              </p>
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Idioma de informações em jogo
              </h3>
              <p className="font-poppins font-normal text-sm">
                English (US)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-4">
            <h1 className="font-poppins font-semibold mt-4 text-lg">
              Geral
            </h1>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Versão
              </h3>
              <p className="font-poppins font-normal text-sm">
                0.8.12
              </p>
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Termos e condições
              </h3>
              <p className="font-poppins font-normal text-sm">
                Tudo o que você precisa saber.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Central de ajuda
              </h3>
              <p className="font-poppins font-normal text-sm">
                Precisa de ajuda? Fale conosco.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
              <h3 className="font-poppins font-medium mt-4 text-base">
                Sobre
              </h3>
              <p className="font-poppins font-normal text-sm">
                Saiba mais sobre o app.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-4">
            <h1 className="font-poppins font-semibold mt-4 text-lg">
            Outros
            </h1>
          </div>
          <div className="flex flex-row w-80 justify-between mt-2">
            <div className="flex flex-col items-start w-48 ml-4">
            <Link onClick={() => globalUser.status = ""} to={"/"}>
              <h3 className="font-poppins font-medium mt-4 text-red-600">
              Sair
              </h3>
              </Link>
              <p className="font-poppins font-normal text-sm">
              Você entrou como Junior Saraiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoggedProfile;