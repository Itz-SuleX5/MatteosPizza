import React from "react";
import Button from "../atoms/Button";
import useCart from "../../store/useCart";
import { useNavbar } from "../../store/useNavbar";

const Card = ({ id, image, name, description, ingredients, price, onAdd, ...rest}) => {
    const setNavbarProductAdded = useNavbar((state) => state.setNavbarProductAdded);
    const setNavbarTriggerAnimation = useNavbar((state) => state.setNavbarTriggerAnimation);
    const addToCart = useCart((state) => state.addToCart);

    const handleAdd = () => {
        //console.log(id)
        setNavbarProductAdded(true);
        setTimeout(() => {
            setNavbarProductAdded(false);
            setNavbarTriggerAnimation(false);
        }, 3000);
        setTimeout(() => {
            setNavbarTriggerAnimation(true);
        }, 100);
        addToCart({
            id,
            image,
            name,
            description,
            ingredients,
            price,
            ...rest,
        });
        if (onAdd) onAdd();
    };


    const shouldAddBreak = (description || "").length < 36;
    return (
    <div className="bg-white rounded-xl border-2 border-gray-200 flex flex-col w-auto">
        <img src={image} alt={name} className="object-cover mb-4 rounded-t-lg"/>
        <div className="px-4">
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{description} {shouldAddBreak && <><br />&nbsp;</>}</p>
            <p>{ingredients}</p>
        </div>
        <div className="px-4 py-4 flex items-center justify-between">
            <span className="tex-lg font-bold">${price}</span>
            <Button onClick={handleAdd}>Anadir al carrito</Button>
        </div>
        
    </div>
    );};

export default Card;