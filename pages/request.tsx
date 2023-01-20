import React from 'react';

const RequestPage = () => {
  return <>Request</>;
};

export default RequestPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
