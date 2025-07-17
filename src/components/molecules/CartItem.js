import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import pizzaImage from "../../assets/pizza.svg"

const CartItem = ({image, name, price, quantity, handleDelete, handleIncrement, handleDecrement}) => (

    <div className='grid grid-cols-5 px-4 gap-3 pt-0 py-1'>
                <div>
                    <img src={image} alt={name} className='object-cover'/>
                </div>
                <div className='flex flex-col justify-center col-span-2'>
                    <h2>{name}</h2>
                    <p className='text-gray-500'>${price}</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                        <button className='border-2 border-gray-2 w-7 h-7 flex justify-center items-center' onClick={handleDecrement}>-</button>
                    <h3>{quantity}</h3>
                    <button className='border-2 border-gray-2 w-7 h-7 flex justify-center items-center' onClick={handleIncrement}>+</button>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={handleDelete}>
                        <DeleteOutlineOutlinedIcon/>
                    </button>
                    
                </div>
                
            </div>
);

export default CartItem;