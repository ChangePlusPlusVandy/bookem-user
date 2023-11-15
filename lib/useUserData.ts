import { fetchData } from '@/utils/utils';
import { QueriedUserData } from 'bookem-shared/src/types/database';
import { useEffect, useState } from 'react';

export const useUserData = () => {
  const [userData, setUserData] = useState<QueriedUserData | null>(null);

  useEffect(() => {
    fetchData('/api/users/')
      .then(data => setUserData(data))
      .catch(err => console.error('Error fetching user data:', err));
  }, []);

  return userData;
};
