import React from "react";
import "../../styles/Footer.css";
import Logo from "../atoms/Logo"
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";


const Footer = () => (
  <div className="footer bg-gray-900 p-4 border flex flex-col">
    <div className="flex justify-between w-4/5 items-start mx-auto mt-4 border-b border-b-gray-700 pb-4">
    <div className="text-white flex flex-col gap-1 max-w-xs">
      <div className="flex items-center gap-2">
        <Logo/>
        <h1>Matteo's Pizza</h1>
      </div>
      <p className="text-gray-400">Las mejores pizzas artesanales entregadas directamente en tu puerta</p>
    </div>
    <div className="text-white flex flex-col items-start gap-2">
      <h1>Enlaces</h1>
      <ul className="text-gray-400">
        <li><HashLink smooth to="/#inicio" className="!no-underline">Inicio</HashLink></li>
        <li><HashLink smooth to="/#menu" className="!no-underline">Menu</HashLink></li>
        <li>Sobre nosotros</li>
        <li>Contacto</li>
      </ul>
    </div>
    <div className="text-white flex flex-col gap-2">
      <h1>Contacto</h1>
      <ul className="text-gray-400">
        <li>Calle Francisco Menendez</li>
        <li></li>
      </ul>
    </div>
    <div className="text-white flex flex-col gap-2">
      <h1>Horario</h1>
      <ul className="text-gray-400">
        <li>Lunes - Jueves: 11:00 - 22:00</li>
        <li>Viernes - Sabado: 11:00 - 23:00</li>
        <li>Domingo: 11:00 - 22:00</li>
      </ul>
    </div>
    </div>
    <div className="flex justify-center mx-auto mt-4 text-gray-500">
    <p>2025 Matteo's Pizza. Todos los derechos reservados</p>
    </div>
  </div>
);

export default Footer;