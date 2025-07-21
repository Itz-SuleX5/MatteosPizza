import React from "react";
import Logo from "../atoms/Logo";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Footer = () => (
  <div className="footer bg-gray-900 p-4 border flex flex-col">
    <div className="flex flex-col md:flex-row md:justify-between w-full md:w-4/5 items-center md:items-start mx-auto mt-4 border-b border-b-gray-700 pb-4 gap-6 md:gap-0">
      
      <div className="text-white flex flex-col gap-1 max-w-xs w-full">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <Logo />
          <h1 className="text-center md:text-left">Matteo's Pizza</h1>
        </div>
        <p className="text-gray-400 text-center md:!text-left">
          Las mejores pizzas artesanales entregadas directamente en tu puerta
        </p>
      </div>

      <div className="text-white flex flex-col items-center md:items-start gap-2">
        <h1 className="text-center md:text-left">Enlaces</h1>
        <ul className="text-gray-400 flex flex-col gap-1 items-center md:items-start">
          <li className="text-center md:text-left">
            <HashLink smooth to="/#inicio" className="!no-underline">
              Inicio
            </HashLink>
          </li>
          <li className="text-center md:text-left">
            <HashLink smooth to="/#menu" className="!no-underline">
              Menu
            </HashLink>
          </li>
          <li className="text-center md:text-left">Sobre nosotros</li>
          <li className="text-center md:text-left">Contacto</li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-center md:text-left">Contacto</h1>
        <ul className="text-gray-400 items-center md:items-start flex flex-col">
          <li className="text-center md:text-left">Calle Francisco Menendez</li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-center md:text-left">Horario</h1>
        <ul className="text-gray-400 items-center md:items-start flex flex-col">
          <li className="text-center md:text-left">Lunes - Jueves: 11:00 - 22:00</li>
          <li className="text-center md:text-left">Viernes - Sábado: 11:00 - 23:00</li>
          <li className="text-center md:text-left">Domingo: 11:00 - 22:00</li>
        </ul>
      </div>
    </div>

    <div className="flex justify-center mx-auto mt-4 text-gray-500 text-center">
      <p>2025 Matteo's Pizza. Todos los derechos reservados</p>
    </div>
  </div>
);

export default Footer;