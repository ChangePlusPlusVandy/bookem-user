import React from 'react';

const DonatePage = () => {
  return <>Donate</>;
};

export default DonatePage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
