import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import useCart from "../store/useCart";

export const useConfirmOrder = () => {
    const { getAccessTokenSilently, user }= useAuth0()
    const cartItems = useCart(state => state.items);
    const [orderData, setOrderData] = useState(null)

    const confirmOrder = async (cartItems, metodo_pago) => {
    const token = await getAccessTokenSilently()
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/orders/api/create/`, {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
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
    //console.log(data)
    //console.log(`Metodo de pago recibido en el hook: ${metodo_pago}`)
};

    return {confirmOrder, orderData} 
};

