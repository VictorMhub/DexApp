// BarraPorcentagem.js

import React from 'react';

const BarraPorcentagem = ({ genderRate }) => {
  if (genderRate === -1) {
    return <div className="text-gray-500">Este Pokémon não tem gênero.</div>;
  }

  const porcentagemFeminino = (genderRate / 8) * 100;
  const porcentagemMasculino = 100 - porcentagemFeminino;

  return (
    <div className="w-[328px]">
      <div className="flex justify-center items-center mb-2">
        <span className="text-gray-600 font-poppins text-[15px] font-medium">GENDER</span>
      </div>
      <div className="relative h-[8px] w-[328px] rounded-full overflow-hidden bg-gray-200 right-[12px]">
        <div
          style={{ width: `${porcentagemMasculino}%` }}
          className="absolute left-0 h-full bg-blue-600"
        ></div>
        <div
          style={{ width: `${porcentagemFeminino}%` }}
          className="absolute right-0 h-full bg-pink-500"
        ></div>
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span className="text-gray-700">♂ {porcentagemMasculino.toFixed(1)}%</span>
        <span className="text-gray-700">♀ {porcentagemFeminino.toFixed(1)}%</span>
      </div>
    </div>
  );
};

export default BarraPorcentagem;
