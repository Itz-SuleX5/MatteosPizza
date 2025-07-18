import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

export const useInfo = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [userProfile, setUserProfile] = useState({
    direccion: '',
    telefono: '',
    auth0_id: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = await getAccessTokenSilently();
      
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile/${user.sub}/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP! estado: ${response.status}`);
      }

      const data = await response.json();
      //console.log(data)
      console.log(token)
      
      setUserProfile({
        direccion: data.direccion || '',
        telefono: data.telefono || '',
        auth0_id: data.auth0_id || user?.sub || ''
      });
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (data) => {
    try {
      
      const token = await getAccessTokenSilently();
      
      const requestData = {
        nombre: `${user.name}`,
        direccion: data.direccion,
        telefono: data.telefono,
        auth0_id: user?.sub
      };
      
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error HTTP! estado: ${response.status}, detalles: ${JSON.stringify(errorData)}`);
      }

      const result = await response.json();
      
      setUserProfile(prev => ({
        ...prev,
        address: result.address || prev.address,
        phone: result.phone || prev.phone
      }));
      
      return result;
      
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserProfile();
      //console.log(user.sub)
    }
  }, [user]);

  return {
    userProfile,
    loading,
    error,
    updateUserProfile,
    refetchProfile: fetchUserProfile
  };
};