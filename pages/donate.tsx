import { SideBar } from '@/components/SideBar';
import React from 'react';

const DonatePage = () => {
  return (
    <div>
      <SideBar />
      Donate
    </div>
  );
};

export default DonatePage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
