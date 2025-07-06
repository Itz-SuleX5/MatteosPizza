import React from "react";
import Button from "../atoms/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoneyIcon from '@mui/icons-material/Money';
import HouseIcon from '@mui/icons-material/House';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { HashLink } from "react-router-hash-link";

const OrderConfirmation = () => (
    <div className="flex flex-col mx-auto w-full items-center gap-2">
        <CheckCircleIcon style={{ fontSize: 80, color: "#22C55E"}}/>
        <h1 className="text-2xl font-medium">¡Pedido Confirmado!</h1>
        <h2 className="text-gray-500">Tu pedido ha sido procesado correctamente</h2>
        <h2 className="mt-2">Pedido #12345</h2>

        <div className="flex flex-col w-full border border-gray-400 p-3 rounded">
            <div className="gap-1 border-b border-gray-300 flex flex-col pb-2">
               <h1 className="font-medium">Detalles del pedido</h1>
            <h2 className="text-gray-400 font-medium my-2">Productos</h2>
            <div className="flex justify-between">
                <h2>Producto 1</h2>
                <h2>$29.99</h2>
            </div>
            <div className="flex justify-between">
                <h2>Producto 2</h2>
                <h2>$19.99</h2>
            </div> 
            <div className="flex justify-between">
                <h2 className="font-bold">Total</h2>
                <div className="bg-green-500 px-2 py-1 rounded-full">
                    <h2 className="text-white">$19.99</h2>
                </div>
                
            </div> 
            </div>

            <div className="gap-1 border-b border-gray-300 flex flex-col pb-2">
            <h2 className="text-gray-400 font-medium my-2">Direccion de entrega</h2>
            <div>
                <h2>Calle principal</h2>
            </div> 
            </div>

            <div className="gap-1 flex flex-col">
            <h2 className="text-gray-400 font-medium my-2">Metodo de pago</h2>
            <div className="flex items-center gap-2">
                <MoneyIcon/> <h2>efectivo</h2>
            </div> 
            </div>
            
        </div>

    <HashLink smooth to= "/#inicio" className="block w-full !no-underline">
        <Button className="flex items-center justify-center w-full mx-auto my-2 gap-2">
            <HouseIcon/>
            Volver a inicio
        </Button>
    </HashLink>
        <Button className="flex items-center justify-center w-full mx-auto bg-white border border-gray-400 text-gray-700 gap-2">
            <ReceiptIcon/>
            Ver mis pedidos
        </Button>
    </div>
);

export default OrderConfirmation;