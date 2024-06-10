import BottomNavbar from "../components/BottomNavbar";
import { GlobalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
import { hilda, hilbert, google } from "../assets";
import { Link } from "react-router-dom";
const LoggedProfile = () => {
  const { setToggleDex, setToggleReg, setToggleFav, setToggleAcc, globalUser } =
    useContext(GlobalContext);

  useEffect(() => {
    setToggleDex(false);
    setToggleAcc(true);
    setToggleFav(false);
    setToggleReg(false);
  }, []);

  return (
    <section className="w-full flex flex-col items-center">
      <BottomNavbar />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full h-[200px] border-2">
          <div className="flex fle-row w-full ml-[10px]">
            <div className="flex w-full h-[72px]">
              <p className="font-normal	font-poppins leading-6 text-[16px]">
                Mantenha sua Pokédex atualizada e participe desse mundo.
              </p>
              <img
                src={hilbert}
                className=" flex justify-self-end w-[90px] h-[87px]"
                alt=""
              />
              <img
                src={hilda}
                className="flex justify-self-end  w-[90px] h-[87px]"
                alt=""
              />
            </div>
          </div>
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
      </div>
      <div className="w-full flex flex-col items-center aaaaa">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-[35px]">
            <h1 className="font-poppins font-semibold	mt-[15px] text-[16px]">
              Pokédex
            </h1>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
                Mega evoluções
              </h3>
              <p className="font-poppins font-normal text-[14px]">
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
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
                Outras formas
              </h3>
              <p className="font-poppins font-normal text-[14px]">
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
      <div className="w-full flex flex-col items-center mt-[30px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-[35px]">
            <h1 className="font-poppins font-semibold	mt-[15px] text-[16px]">
              Notificações
            </h1>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
                Atualizações na pokédex
              </h3>
              <p className="font-poppins font-normal text-[14px]">
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
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
                Mundo Pokémon{" "}
              </h3>
              <p className="font-poppins font-normal text-[14px]">
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
      <div className="w-full flex flex-col items-center mt-[30px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-[35px]">
            <h1 className="font-poppins font-semibold	mt-[15px] text-[16px]">
              Idioma
            </h1>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
                Idioma da interface
              </h3>
              <p className="font-poppins font-normal text-[14px]">
                Português (PT-BR)
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
                Idioma de informações em jogo{" "}
              </h3>
              <p className="font-poppins font-normal text-[14px]">
                English (US){" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-[30px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full ml-[35px]">
            <h1 className="font-poppins font-semibold	mt-[15px] text-[16px]">
            Geral
            </h1>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
              Versão 
              </h3>
              <p className="font-poppins font-normal text-[14px]">
              0.8.12
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
              Termos e condições
              </h3>
              <p className="font-poppins font-normal text-[14px]">
              Tudo o que você precisa saber.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
              Central de ajuda
              </h3>
              <p className="font-poppins font-normal text-[14px]">
              Precisa de ajuda? Fale conosco.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[328px] justify-between">
            <div className="flex flex-col items-start w-[197px] ml-[35px]">
              <h3 className="font-poppins font-medium	mt-[15px] text-[16px]">
              Sobre
              </h3>
              <p className="font-poppins font-normal text-[14px]">
              Saiba mais sobre o app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoggedProfile;