import React from "react";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';


const useOrders = () => {

    const [orders, setOrders] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    useEffect(() => {
    const fetchOrders = async () => {

        const token = await getAccessTokenSilently();

        
            
        
        const response = await fetch (`${process.env.REACT_APP_API_BASE_URL}/api/orders/api/`, {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }
        })

        const data = await response.json();

        const parsedOrders = data.orders.map(order => {
            //console.log(order.fecha_pedido);
            const fecha = new Date(order.fecha_pedido);
            const fechaFormateada = fecha.toLocaleString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });

            const parsedItems = order.items.map(item => ({
                id: item.id,
                nombre: item.product.nombre,
                imagen_url: item.product.imagen_url,
                ingredientes: item.product.ingredientes,
                precio: item.product.precio,
                cantidad: item.cantidad,
                precio_unitario: item.precio_unitario,
                subtotal: item.subtotal,

            }));
            return {
            id: order.id,
            estado: order.estado,
            metodo_pago: order.metodo_pago,
            total: order.total,
            fecha: fechaFormateada,
            cliente: order.user_info.nombre,
            direccion: order.user_info.direccion,
            telefono: order.user_info.telefono,
            items: parsedItems
        };
    });
        


        setOrders(parsedOrders);
        
    }

    fetchOrders();
    },[getAccessTokenSilently]);

    

    return (orders);

};

export default useOrders;