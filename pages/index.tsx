import MainDashboard from '@/components/Home/MainDashboard';
import React from 'react';
import { fetchData } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { useUserData } from '@/lib/useUserData';
import { QueriedUserData } from 'bookem-shared/src/types/database';

const HomePage = () => {
  const [error, setError] = useState<Error>();
  const userData = useUserData();

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
