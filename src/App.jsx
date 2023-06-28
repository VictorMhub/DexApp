import React from 'react'
import Onboarding from './pages/Onboarding'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => 
  (
    <div className='w-full overflow-hidden'>
      <section className='sm:px-16 px-6 flex justify-center items-center'>
        <nav className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </nav>
      </section>
      
      <section className='flex justify-center items-start'>
        <main className='xl:max-w-[1280px] w-full'>
        <Onboarding />
        </main>  
      </section>
      <Outlet />
    </div>
  )


export default App