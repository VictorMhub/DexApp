import React from 'react'
import { hilbert, hilda } from '../assets'
import { Link } from 'react-router-dom'

const Onboarding = () => 
   (
      <section className='flex flex-col sm:py-16 py-6'>
        <div className='flex justify-center items-center xl:px-0 sm:px-16 px-6'>
          <img className='w-[210px] h-[255.1px] left-[21px] top-[178px] self-center' src={ hilda } alt="hilda"/>
          <img className='w-[225px] h-[262.86px] left-[150px] top-[167px] self-center' src={ hilbert } alt="hilbert"/>
        </div>

        <div className='flex flex-col pt-[20px] gap-[32px] w-full h-[288px] left-[16px] items-center'>
          <div className='flex flex-col justify-center items-center pt-0 gap-[16px]'>
            <p className='font-medium font-normal font-poppins text-[28px] text-center'>Está pronto para essa aventura?</p>
            <p className='font-normal font-poppins text-[16px] text-center text-gray-600'>Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!</p>
          </div>

          <div className='flex flex-col items-center pt-[25px] gap-[4px] w-full'>
            <Link to="/signup">
            <button className='w-[328px] h-[58px] items-center bg-blue-900 text-white text-center rounded-full font-semibold text-[18px] font-poppins'>Criar conta</button>
            </Link>
            <Link to="/signin">
            <p className='font-poppins font-semibold text-[18px] text-blue-900'>Já tenho uma conta</p>
            </Link>
          </div>
        </div>
      </section>     
    )

export default Onboarding