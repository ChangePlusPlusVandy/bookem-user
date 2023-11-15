import { fetchData } from '@/utils/utils';
import { QueriedUserData } from 'bookem-shared/src/types/database';
import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch user data and return
 * @returns
 */
export const useUserData = () => {
  const [userData, setUserData] = useState<QueriedUserData | null>(null);

  useEffect(() => {
    fetchData('/api/users/')
      .then(data => setUserData(data))
      .catch(err => console.error('Error fetching user data:', err));
  }, []);

  return userData;
};
