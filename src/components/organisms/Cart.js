import React from 'react';
import { Link } from "react-router-dom"
import Button from '../atoms/Button';
import CloseIcon from '@mui/icons-material/Close';
import pizzaImage from "../../assets/pizza.svg"
import CartItem from '../molecules/CartItem';
import useCart from '../../store/useCart';

const Cart = () => {
    const cartItems = useCart((state) => state.items);
    const removeFromCart = useCart((state) => state.removeFromCart);
    const decrementQuantity = useCart((state) => state.decrementQuantity);
    const incrementQuantity = useCart((state) => state.incrementQuantity);

    const total = cartItems.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
    )

    const handleDelete = (id) => {
        removeFromCart(id);
    } 
    const handleDecrement = (id) => {
        decrementQuantity(id);
    }
    const handleIncrement = (id) => {
        incrementQuantity(id);
    }
    return (
        <div className='flex flex-col items-center mx-auto my-4 gap-4'>
        <h1 className='text-3xl font-bold'>Carrito de compras</h1>
        <div className='w-2/5 border-x-2 border-y-2 border-gray-2'>
            <div className='justify-between flex border-b-2 border-gray-2 p-4 mb-2'>
                <h1 className='font-bold'>Mi carrito</h1>
                <CloseIcon/>
            </div>
            {cartItems.map(item => (
                <CartItem
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                handleDelete={() => handleDelete(item.id)}
                handleDecrement={() => handleDecrement(item.id)}
                handleIncrement={() => handleIncrement(item.id)}
            />
            ))}
            

            

            <div className='px-4 py-3 mt-2 border-y-2 gap-2 flex flex-col'>
                <div className='flex justify-between'>
                    <h3 className='text-gray-400'>Subtotal</h3>
                    <h2>${total.toFixed(2)}</h2>
                </div>
                <div className='flex justify-between'>
                    <h3 className='text-gray-400'>Envio</h3>
                    <h2>$2.99</h2>
                </div>
                <div className='flex justify-between'>
                    <h3 className='font-bold'>Total</h3>
                    <h2 className='font-bold'>${(parseFloat(total.toFixed(2))+2.99).toFixed(2)}</h2>
                </div>
                
            </div>

            <div className='flex justify-center items-center py-3 px-4'>
                <Link to ="/pago" className='block w-full'>
                    <Button className='w-full'>Proceder al pago</Button>
                </Link>
                
            </div>


        </div>
        
    </div>
    )
}
    

export default Cart;