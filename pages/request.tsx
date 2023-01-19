import { SideBar } from '@/components/SideBar';
import React from 'react';

const RequestPage = () => {
  return (
    <div>
      <SideBar />
      Request
    </div>
  );
};

export default RequestPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
