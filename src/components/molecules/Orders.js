import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import Button from "../atoms/Button";
import Pill from "../atoms/Pill";
import MoneyIcon from '@mui/icons-material/Money';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import OrderDetails from "../molecules/OrderDetails";
import useOrders from "../../hooks/useOrders";
import { HandleNextStage } from "../../hooks/handleNextStage";
import { useAuth0 } from "@auth0/auth0-react";
import { getColorStatus } from "../../utils/colorUtils";

const Orders = () => {
  const states = ['Cancelado', 'Pendiente', 'Preparando', 'Enviado', 'Entregado'];
  const initialOrders= useOrders();
  const { getAccessTokenSilently } = useAuth0();
  
  
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState('');

  useEffect(() => {
    if (Array.isArray(initialOrders)){
        setOrders(initialOrders);
    }
  }, [initialOrders])
  const handleNextStageClick = () => HandleNextStage(order, states, orders, setOrder, setOrders, getAccessTokenSilently)


  return (
    <div className={`md:grid gap-4 ${order ? "md:grid-cols-[7fr_3fr]" : "md:grid-cols-[10fr_0fr]"}`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Gestión de Pedidos</h1>

        <div className="max-w-full flex gap-4 overflow-x-auto scrollbar-none  whitespace-nowrap">
          <button>Todos</button>
          {states.map((state) => (
            <Pill key={state} name={state} />
          ))}
        </div>

        <div className="border border-gray-400 mb-4 hidden md:block ">
          <div className="grid grid-cols-7 px-4 py-2 text-gray-600 font-semibold">
            <h2>ID Pedido</h2>
            <h2>Cliente</h2>
            <h2>Fecha</h2>
            <h2>Total</h2>
            <h2>Pago</h2>
            <h2>Estado</h2>
          </div>

          {orders?.map(o => (
            <div key={o.id} className="grid grid-cols-7 border-t border-gray-300 px-4 py-2 items-center">
              <h3>{o.id}</h3>
              <h3>{o.cliente}</h3>
              <h3>{o.fecha}</h3>
              <h3>${o.total}</h3>

              {o.metodo_pago === "Efectivo" ? (
                <MoneyIcon />
              ) : o.metodo_pago === "Tarjeta de Credito" ? (
                <CreditCardOutlinedIcon />
              ) : (
                <CurrencyBitcoinIcon />
              )}

              <Pill name={o.estado.charAt(0).toUpperCase() + o.estado.slice(1)} />
              <Button className="px-1 py-1" onClick={() => setOrder(o)}>Ver</Button>
            </div>
          ))}
        </div>

          {orders?.map(o => {
              const [ , , bgColor] = getColorStatus(o.estado.charAt(0).toUpperCase() + o.estado.slice(1))
              console.log(bgColor)
            return (
              <div className="border rounded-lg overflow-hidden block md:hidden">
                  <div className="flex justify-between  ">
                  <div className="flex items-center gap-3">
                    <div className={`${bgColor} w-1 h-full`} />
                      <h1>#{o.id}</h1>
                      <Pill name={o.estado.charAt(0).toUpperCase() + o.estado.slice(1)} />
                  </div>
                  <div className="flex items-center m-2 gap-3">
                    <h1>{o.fecha}</h1>
                    <motion.button animate={o.id === order.id ? {rotate: 180} : {rotate: 0}} transition={{duration: 0.3}} className={`rounded-full w-8 h-8  flex items-center justify-center focus:outline-none ${order.id === o.id ? "bg-red-500 text-white" : "bg-gray-100"}`} onClick={() => order ? setOrder("") : setOrder(o)}><KeyboardArrowDownIcon/></motion.button>
                  </div>
                </div>

              {o.id === order.id &&(
                <div className="flex flex-col border-t-2 border-gray-100 gap-1 p-2">
                <h1 className="font-medium">Informacion del cliente</h1>
                <h2>{o.cliente}</h2>
                <div className="flex text-gray-600">
                  <LocationOnOutlinedIcon/> {o.direccion}
                </div>
                <div className="flex text-gray-600">
                  <PhoneOutlinedIcon/> {o.telefono}
                </div>
                <h1 className="font-medium">Productos</h1>
                {o?.items?.map(i => {
                  return(
                  <div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <img src={i.imagen_url} alt="" className="h-20 w-40 rounded-xl object-cover" />
                    <div>
                      <h1>{i.nombre}</h1>
                      <h2 className="text-gray-600">${i.precio_unitario} x {i.cantidad}</h2>

                    </div>
                    </div>
                    <div>
                      <h1>${i.subtotal}</h1>
                    </div>
                    
                  </div>
                    </div>
                  )})}

                  <div className="gap-1 flex flex-col">
                    <h1 className="font-medium">Resumen</h1>
                    <div className="flex justify-between">
                      <h2>Subtotal</h2>
                      <h2>${o.total}</h2>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-100">
                      <h2>Costo de envio</h2>
                      <h2>$2.99</h2>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="font-medium">Total</h1>
                      <h1 className="text-green-600 font-medium">${(parseFloat(o.total)+2.99).toFixed(2)}</h1>
                    </div>
                    <h1 className="font-medium">Metodo de pago</h1>
                    <div className="w-full rounded-md bg-gray-50 mx-auto p-1 flex items-center gap-2">
                      <div className={`rounded-full w-8 h-8 flex ${o.metodo_pago === "Efectivo" ? "bg-green-500" : o.metodo_pago === "Bitcoin" ? "bg-amber-500" : o.metodo_pago === "Tarjeta de Credito" ? "bg-blue-500" : ""}`}>
                        <div className={`bg-white rounded-full w-5 h-5 m-auto flex items-center justify-center p-1 ${o.metodo_pago === "Bitcoin" ? "text-amber-500" : o.metodo_pago === "Efectivo" ? "text-green-500" : o.metodo_pago === "Tarjeta de Credito" ? "text-blue-500" : ""}`}>
                          {o.metodo_pago === "Efectivo" ? (
                            <MoneyIcon fontSize="small"/>
                          ) : o.metodo_pago === "Tarjeta de Credito" ? (
                            <CreditCardOutlinedIcon fontSize="small"/>
                          ) : (
                            <CurrencyBitcoinIcon fontSize="small"/>
                          )}
                          
                          
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h1>{o.metodo_pago}</h1>
                        <h3 className="text-gray-500">Pago completado</h3>
                      </div>
                      
                    </div>
                  </div>
                

          
                

              </div>
              )}
              

              </div>
              
            )
            
  })}
          

      </div>

      <div>
        {order && (
          <OrderDetails order={order} onNextStage={handleNextStageClick} />
        )}
      </div>
    </div>
  );
};

export default Orders;
