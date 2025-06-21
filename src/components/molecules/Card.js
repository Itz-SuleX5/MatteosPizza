import React from "react";
import Button from "../atoms/Button";

const Card = ({ image, name, description, price, onAdd}) => {
    const shouldAddBreak = description.length < 36;
    return (
    <div className="bg-white rounded-xl border-2 border-gray-200 flex flex-col w-auto">
        <img src={image} alt={name} className="object-cover mb-4 rounded-t-lg"/>
        <div className="px-4">
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{description} {shouldAddBreak && <><br />&nbsp;</>}</p>
        </div>
        <div className="px-4 py-4 flex items-center justify-between">
            <span className="tex-lg font-bold">${price}</span>
            <Button onClick={onAdd}>Anadir al carrito</Button>
        </div>
        
    </div>
    );};

export default Card;