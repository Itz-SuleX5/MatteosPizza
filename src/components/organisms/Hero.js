import React from "react";
import heroImg from "../../assets/hero.svg";
import Button from "../atoms/Button"

const Hero = () => (
  <section className="relative flex items-center justify-center bg-gray-100 mt-0 ms-0">
      <img src={heroImg} alt="img-hero" className="w-100"></img>
  
  <div className="absolute z-10 flex flex-col items-center">
    <h1 className="text-white text-7xl">Ordena ahora</h1>
    <h4 className="text-white text-2xl my-4">Pizzas artesanales a domicilio en menos de 30 minutos</h4>
    <Button>Ver menu</Button>
  </div>
  </section>
);

export default Hero;
