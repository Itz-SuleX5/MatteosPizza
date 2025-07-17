import React, { useEffect, useState } from 'react';
import { useGetMyOrders } from '../../hooks/useGetMyOrders';
import Pill from "../atoms/Pill";
import Button from '../atoms/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export const OrderHistory = () => {
    const { getMyOrders, myOrders } = useGetMyOrders();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getMyOrders();
    }, []);

    return (
        <div className="w-full flex">
            <div className="flex flex-col w-full gap-4">
                <h1 className="text-xl">Historial de Pedidos</h1>
                {myOrders && myOrders.orders.map((order, idx) => {
                    const totalPizzas = order.items.reduce((acc, item) => acc + item.cantidad, 0);
                    return (
                        <div key={order.id} className="border border-gray-400">
                            <div className="flex justify-between w-full border-b border-gray-300 p-4">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <h1>#{order.id} - {order.fecha_pedido.slice(0,10)}</h1>
                                        <Pill name={order.estado}/>
                                    </div>
                                    <h1 className="text-gray-400">{totalPizzas} pizzas</h1>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <h1>${order.total}</h1>
                                    <button className="text-gray-400 focus:outline-none" onClick={() => setOpen(open === idx ? null : idx)}>
                                        Detalles <KeyboardArrowDownIcon/>
                                    </button>
                                </div>
                            </div>
                            {open === idx && (
                                <div className="bg-gray-50 flex flex-col">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex justify-between px-4 pt-2 pb-1">
                                            <div className="flex gap-2">
                                                <img src={item.product.imagen_url} alt="" className="object-scale-down w-20"/>
                                                <div>
                                                    <h1>{item.product.nombre}</h1>
                                                    <h2 className="text-gray-400">Ingredientes: {item.product.ingredientes}</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <h1>${item.product.precio} x {item.cantidad}</h1>
                                            </div>
                                        </div>
                                    ))}
                                    <Button className='ml-auto mr-4 mb-4'>
                                        <LocalPizzaIcon/>Repetir pedido
                                    </Button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};