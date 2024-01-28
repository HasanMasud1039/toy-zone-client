import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const { user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { isLoading, refetch,  data: cart = [] } = useQuery({
        queryKey: ['toys', user?.email],
        queryFn: async() => {
            const response= await fetch(`https://toy-zone-server-new.vercel.app/cart/${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        },
      })
    return [cart, refetch, isLoading];
}
export default useCart;