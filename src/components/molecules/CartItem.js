import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import pizzaImage from "../../assets/pizza.svg"

const CartItem = ({image, name, price, quantity}) => (

    <div className='grid grid-cols-5 px-4 gap-3 pt-0 py-1'>
                <div>
                    <img src={image} alt={name} className='object-cover'/>
                </div>
                <div className='flex flex-col justify-center col-span-2'>
                    <h2>{name}</h2>
                    <p className='text-gray-500'>${price}</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div className='border-2 border-gray-2 w-7 h-7 flex justify-center items-center '>
                        -
                    </div>
                    <h3>{quantity}</h3>
                    <div className='border-2 border-gray-2 w-7 h-7 flex justify-center items-center'>
                        +
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <DeleteOutlineOutlinedIcon/>
                </div>
                
            </div>
);

export default CartItem;