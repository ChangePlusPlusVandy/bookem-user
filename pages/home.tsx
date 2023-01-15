import React from 'react';

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
