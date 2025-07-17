import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useGetMyOrders = () => {

    const { getAccessTokenSilently } = useAuth0()
    const [myOrders, setMyOrders] = useState(null);
    

    const getMyOrders = async () => {
        const token = await getAccessTokenSilently()

        const response = await fetch('http://127.0.0.1:8000/api/orders/api/my-orders/',  {
            'method':"GET",
            'headers': {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json()
        setMyOrders(data);
    }

    return {getMyOrders, myOrders}
}