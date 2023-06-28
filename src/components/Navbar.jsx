import React from 'react'
import { arrow } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => 
  (
    <div>
        <Link to="/pokedex">
          <nav className='w-auto flex py-6 justify-end items-center'>
            <p className='font-poppins font-medium text-[18px]'>Pular</p>
            <img className='w-[26px] h-[26px]' src={ arrow } alt="arrow" />
          </nav>
        </Link>
    </div>
  )

export default Navbar