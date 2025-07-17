import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Pill from "../atoms/Pill";
import MoneyIcon from '@mui/icons-material/Money';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import OrderDetails from "../molecules/OrderDetails";
import useOrders from "../../hooks/useOrders";
import { HandleNextStage } from "../../hooks/handleNextStage";
import { useAuth0 } from "@auth0/auth0-react";

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
    <div className={`grid gap-4 ${order ? "grid-cols-[7fr_3fr]" : "grid-cols-[10fr_0fr]"}`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Gestión de Pedidos</h1>

        <div className="flex gap-4">
          <button>Todos</button>
          {states.map((state) => (
            <Pill key={state} name={state} />
          ))}
        </div>

        <div className="border border-gray-400 mb-4">
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
