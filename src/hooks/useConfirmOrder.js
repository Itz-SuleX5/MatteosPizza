import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

export const useConfirmOrder = () => {
    const { getAccessTokenSilently, user } = useAuth0()
    const [orderData, setOrderData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const confirmOrder = async (cartItems, metodo_pago) => {
        setIsLoading(true);
        
        try {
            if (metodo_pago === "Tarjeta" || metodo_pago === "Tarjeta de Credito") {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payments/create-checkout-session/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        cartItems: cartItems.map(item => ({
                            id: item.id,
                            name: item.name,
                            price: parseFloat(item.price).toFixed(2),
                            quantity: item.quantity,
                        })),
                        auth0_user_id: user.sub
                    }),
                });

                const data = await response.json();
                
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    throw new Error(data.error || 'Error al crear la sesión de checkout');
                }
            } else {
                const token = await getAccessTokenSilently()
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/orders/api/create/`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        auth0_user_id: user.sub,
                        estado: "Pendiente",
                        metodo_pago: metodo_pago,
                        items: cartItems.map(item => ({
                            product_id: item.id,
                            cantidad: item.quantity,
                        }))
                    }),
                });

                const data = await response.json()
                setOrderData(data)
                
                if (data.success) {
                } else {
                    throw new Error(data.message || 'Error al crear la orden');
                }
            }
        } catch (error) {
            console.error('Error al confirmar la orden:', error);
            setOrderData({
                success: false,
                message: 'Error al procesar la orden: ' + error.message
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { confirmOrder, orderData, isLoading }
};