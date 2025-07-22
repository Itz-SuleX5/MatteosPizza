import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

function usePizza() {
    const { getAccessTokenSilently } = useAuth0();

        const fetchPizza = async () => {
            const token = await getAccessTokenSilently();
            
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/api/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            
            const data = await response.json();

            const parsedProducts = data.products.map(product => {
                //console.log(product.ingredientes)
                return{
                    id: product.id,
                    name: product.nombre,
                    image_url: product.imagen_url,
                    price: product.precio,
                    ingredients: product.ingredientes,
                    description: product.descripcion,
                }
            })
            //console.log({token})
            //console.log({data})
            
            return parsedProducts;
        };

        const {
            data: pizzas = [{
                name: '',
                description: '',
                price: '',
                imagen_url: 'https://placehold.co/600x400',
            }],
            isLoading, 
            error,
            refetch
        } = useQuery({
            queryKey: ['pizzas'],
            queryFn: fetchPizza,
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
        });
    
        return {pizzas, isLoading, error, refetch}

    }


export default usePizza;