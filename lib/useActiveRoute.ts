import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useActiveRoute = () => {
  const [activeRoute, setActiveRoute] = useState('');
  const router = useRouter();

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router.pathname]);

  return activeRoute;
};
