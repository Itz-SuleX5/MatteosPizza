import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "../atoms/Button";
import Logo from "../atoms/Logo"

const NavBar = () => (
  <nav className="w-full bg-gray-900  text-white p-4 grid grid-cols-3 items-center flex">
    <div className="flex items-center">
      <Logo/>
      
      <h1 className="ms-5">Matteo's Pizza</h1>
    </div>

    <div className="flex-1 flex justify-center">
      <ul className="flex gap-4">
        <li>Inicio</li>
        <li>Menu</li>
      </ul>
    </div>

    <div className="flex justify-end items-center gap-4">
      <div className="relative">
        <ShoppingCartIcon/>
        <div className="bg-red-500 absolute bottom-4 left-3 z-10 w-4 h-4 absolute rounded-xl">
          <h5 className="items-center justify-center flex text-xs">1</h5>
        </div>
      </div>
        
        <Button>Iniciar sesion</Button>
    </div>

    
  </nav>
);

export default NavBar;