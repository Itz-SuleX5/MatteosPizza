import React from "react";
import Card from "../molecules/Card"
import pizzaImage from "../../assets/pizza.svg"
import usePizza  from "../../hooks/usePizzas"

const productsTest = [
  {
    id: 1,
    name: "Margherita Clasica",
    description: "Tomate, mozarella, albahaca fresca y aceite de oliva",
    price: 12.99,
    image: pizzaImage,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Pepperoni, queso mozzarella",
    price: 14.99,
    image: pizzaImage,
  },
  {
    id: 3,
    name: "Cuatro Quesos",
    description: "Mozzarella, gorgonzola, parmesano y ricotta",
    price: 15.99,
    image: pizzaImage,
  },
  {
    id: 4,
    name: "Vegetariana",
    description: "Pimientos, cebolla, champiñones y aceitunas",
    price: 13.99,
    image: pizzaImage,
  },
];



const Content = () => {
  const { pizzas } = usePizza();

  return (
    <div id="menu" className="p-8">
    <h1 className="text-3xl text-center">Nuestro menu</h1>
    <h3 className="text-center mt-3">Selecciona tus pizzas favoritas preparadas con ingredientes frescos</h3>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
  {pizzas.map((pizza) => (
    <Card
      key={pizza.id}
      id={pizza.id}
      image={pizza.image_url}
      name={pizza.name}
      description={pizza.description}
      ingredients={pizza.ingredients}
      price={pizza.price}
    />
  ))}
    </div>
  </div>
  )
};

export default Content;