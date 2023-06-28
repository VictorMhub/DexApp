import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RegisterEmail from './pages/RegisterEmail';
import RegisterPassword from './pages/RegisterPassword';
import RegisterUser from './pages/RegisterUser';
import RegisterSucess from './pages/RegisterSucess';
import Login from './pages/Login';
import LoginSucess from './pages/LoginSucess';
import { GlobalProvider } from './context/globalContext';
import Pokedex from './pages/Pokedex';
import Regions from "./pages/Regions";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import PokemonDetails from "./pages/PokemonDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    ]
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/register/email",
    element: <RegisterEmail />
  },
  {
    path: "/register/password",
    element: <RegisterPassword />
  },
  {
    path: "/register/user",
    element: <RegisterUser />
  },
  {
    path:"/register/sucess",
    element: <RegisterSucess />
  },
  {
    path: '/login',
    element:<Login />
  },
  {
    path: "/login/sucess",
    element: <LoginSucess />
  },
  {
    path: "/pokedex",
    element: <Pokedex />
  },
  {
    path: "/regions",
    element: <Regions />
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/pokemon/:id/:name",
    element: <PokemonDetails />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={ router } />
    </GlobalProvider>
  </React.StrictMode>,
)
