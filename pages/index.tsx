import MainDashboard from '@/components/Home/MainDashboard';
import React from 'react';
import { fetchData } from '@/utils/utils';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    try {
      fetchData('/api/users/')
        .then(data => {
          setUserData(data);
        })
        .catch(err => setError(err));
    } catch (error) {
      setError(new Error('Error fetching user data'));
      console.error('Error fetching user data:', error);
    }
  }, []);

  return (
    <>
      {userData === null && <p>Loading...</p>}
      {userData !== null && <MainDashboard userData={userData} />}
      {/* <MainDashboard userData={userData} /> */}
    </>
  );
};

export default HomePage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
