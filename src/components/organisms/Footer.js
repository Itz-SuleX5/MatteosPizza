import React from "react";
import "../../styles/Footer.css";

const Footer = () => (
  <div className="footer bg-gray-900 p-4 border">
    <div className="flex justify-between w-4/5 items-center m-auto">
    <div className="bg-red-200 p-2">Izquierda</div>
    <div className="bg-green-200 p-2">Centro</div>
    <div className="bg-blue-200 p-2">Derecha</div>
    <div className="bg-blue-200 p-2">Derecha</div>
    </div>
  </div>
);

export default Footer;