import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";

export const useGetMyOrders = () => {

    const { getAccessTokenSilently } = useAuth0()
    

    const getMyOrders = async () => {
        const token = await getAccessTokenSilently()

        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/orders/api/my-orders/`,  {
            'method':"GET",
            'headers': {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json()
        
        return data
    };

    const {
        data: myOrders = null, 
        isLoading,
        error,
        refetch
    } = useQuery({
        queryKey : ['myOrders'],
        queryFn : getMyOrders,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        enabled: false,
    });

    return {
        getMyOrders: refetch,
        myOrders,
        isLoading,
        error,
    };

    
}