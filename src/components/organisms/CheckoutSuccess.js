import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import useCart from '../../store/useCart';
import Button from "../atoms/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoneyIcon from '@mui/icons-material/Money';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import HouseIcon from '@mui/icons-material/House';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { HashLink } from "react-router-hash-link";

const CheckoutSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();
    const sessionId = searchParams.get('session_id');
    const cleanCart = useCart(state => state.cleanCart);
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cleanCart();

        const fetchOrder = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/orders/api/my-orders/`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    const recentOrder = data.orders.find(order =>
                        order.stripe_session_id === sessionId
                    );


                    if (recentOrder) {
                        setOrderData({ order: recentOrder });
                    }
                }
            } catch (error) {
                console.error('Error fetching order:', error);
            } finally {
                setLoading(false);
            }
        };

        if (sessionId) {
            setTimeout(fetchOrder, 2000);
        } else {
            setLoading(false);
        }
    }, [cleanCart, sessionId, getAccessTokenSilently]);

    const handleViewOrders = () => {
        navigate('/orders');
    };

    const getPaymentIcon = (metodo) => {
        switch (metodo) {
            case "Efectivo":
                return <MoneyIcon />;
            case "Tarjeta":
            case "Tarjeta de Credito":
                return <CreditCardOutlinedIcon />;
            case "Bitcoin":
                return <CurrencyBitcoinIcon />;
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="text-center">
                    <p className="text-gray-500">⏳ Procesando pedido...</p>
                </div>
            </div>
        );
    }

    if (!orderData || !orderData.order) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
                    <CheckCircleIcon style={{ fontSize: 80, color: "#22C55E" }} />
                    <h1 className="text-2xl font-medium mt-4">¡Pago Exitoso!</h1>
                    <h2 className="text-gray-500 mb-6">Tu pedido ha sido procesado correctamente</h2>

                    <div className="space-y-3">
                        <HashLink smooth to="/#inicio" className="block w-full !no-underline">
                            <Button className="flex items-center justify-center w-full mx-auto gap-2">
                                <HouseIcon />
                                Volver a inicio
                            </Button>
                        </HashLink>

                        <Button
                            onClick={handleViewOrders}
                            className="flex items-center justify-center w-full mx-auto bg-white border border-gray-400 text-gray-700 gap-2"
                        >
                            <ReceiptIcon />
                            Ver mis pedidos
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    const metodo_pago = orderData.order.metodo_pago;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col mx-auto w-full items-center gap-2">
                    <CheckCircleIcon style={{ fontSize: 80, color: "#22C55E" }} />
                    <h1 className="text-2xl font-medium">¡Pedido Confirmado!</h1>
                    <h2 className="text-gray-500">Tu pedido ha sido procesado correctamente</h2>
                    <h2 className="mt-2">Pedido #{orderData.order.id}</h2>

                    <div className="flex flex-col w-full border border-gray-400 p-3 rounded">
                        <div className="gap-1 border-b border-gray-300 flex flex-col pb-2">
                            <h1 className="font-medium">Detalles del pedido</h1>
                            <h2 className="text-gray-400 font-medium my-2">Productos</h2>
                            {orderData.order.items.map((item, index) => (
                                <div className="flex justify-between" key={item.id || `${item.product?.nombre}-${index}`}>
                                    <div className="flex gap-4">
                                        <h2>{item.product?.nombre}</h2>
                                        <h3>{item.cantidad} x ${item.precio_unitario}</h3>
                                    </div>
                                    <div>
                                        <h2>${item.subtotal}</h2>
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-between">
                                <h2 className="font-bold">Total</h2>
                                <div className="bg-green-500 px-2 py-1 rounded-full">
                                    <h2 className="text-white">${orderData.order.total}</h2>
                                </div>
                            </div>
                        </div>

                        {orderData.order.user_info?.direccion && (
                            <div className="gap-1 border-b border-gray-300 flex flex-col pb-2">
                                <h2 className="text-gray-400 font-medium my-2">Dirección de entrega</h2>
                                <div>
                                    <h2>{orderData.order.user_info.direccion}</h2>
                                </div>
                            </div>
                        )}

                        <div className="gap-1 flex flex-col">
                            <h2 className="text-gray-400 font-medium my-2">Método de pago</h2>
                            <div className="flex items-center gap-2">
                                {getPaymentIcon(metodo_pago)}
                                <h2>{metodo_pago}</h2>
                            </div>
                        </div>
                    </div>

                    <HashLink smooth to="/#inicio" className="block w-full !no-underline">
                        <Button className="flex items-center justify-center w-full mx-auto my-2 gap-2">
                            <HouseIcon />
                            Volver a inicio
                        </Button>
                    </HashLink>

                    <Button
                        onClick={handleViewOrders}
                        className="flex items-center justify-center w-full mx-auto bg-white border border-gray-400 text-gray-700 gap-2"
                    >
                        <ReceiptIcon />
                        Ver mis pedidos
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
