import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Button from "../atoms/Button";
import Logo from "../atoms/Logo"
import useCart from "../../store/useCart";

const NavBar = () => {
  const { loginWithRedirect, user } = useAuth0();
  const cartItems = useCart((state) => state.items);
  return (
  <nav className="w-full bg-gray-900  text-white p-4 grid grid-cols-3 items-center flex" id="inicio">
    <div className="flex items-center">
      <HashLink smooth to ="/#menu" className="!no-underline inline-flex items-center w-auto">
        <Logo/>
        
        <h1 className="ms-5">Matteo's Pizza</h1>
      </HashLink>
    </div>
    <div className="flex-1 flex justify-center">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="!no-underline">Inicio</Link>
        </li>
        <li>
          <HashLink smooth to="/#menu" className="!no-underline">Menu</HashLink>
          </li>
      </ul>
    </div>

    <div className="flex justify-end items-center gap-4">
      <div className="relative">
        <Link to="/carrito">
        <ShoppingCartIcon/>
        </Link>
        
        <div className="bg-red-500 absolute bottom-4 left-3 z-10 w-4 h-4 absolute rounded-xl">
          <h5 className="items-center justify-center flex text-xs">{cartItems.length}</h5>
        </div>
      </div>
    {user && (
      <Link to="/perfil">
      <Tooltip title={user.name} arrow>
        <AccountCircleIcon className="cursor-pointer"/>
      </Tooltip>
    </Link>
    )}

    {!user && (
      <Button onClick={() => loginWithRedirect()}>Iniciar sesion</Button>
    )}   
    
    
      
        
    </div>

    
  </nav>
)};

export default NavBar;