import React from "react";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button"
import { isTemplateLiteral } from "typescript";

const OrderDetails = ({order, onNextStage}) => (
    <div className="border rounded-md border-gray-300 hidden md:block">
        <div className="w-4/5 mx-auto py-4">
            <div className="flex justify-between">
                <h1># {order.id} - {order.cliente}</h1>
                {order && order.estado && (
                <Pill name={order.estado.charAt(0).toUpperCase() + order.estado.slice(1)} />
                )}
            </div>
            <div className="flex justify-between my-2">
                <h2>{order.direccion}</h2>
                <h2>{order.telefono}</h2>
            </div>

        {order?.items?.map(item => (
            <div className="flex items-center gap-2 mb-2">
                <img src={item.imagen_url} alt="" className="object-scale-down w-20"/>
                <div className="flex flex-col">
                    <h2>{item.nombre}</h2>
                    <h3 className="text-zinc-500">${item.precio_unitario} x {item.cantidad}</h3>
                </div>
                
                <h1 className="ml-auto">${item.subtotal}</h1>
            </div>
        ))}
            
        
        

        <div className="flex justify-between items-center">
            <h1>Total</h1>
            <div className="bg-green-500 px-2 py-1 rounded-full">
                <h2 className="text-white">${order.total}</h2>
            </div>
        </div>
        

        <Button className="w-full mt-2" onClick={() => onNextStage(order)}>Siguiente etapa -> </Button>

        </div>
        
    </div>
);

export default OrderDetails;