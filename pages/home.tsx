import { SideBar } from '@/components/Home/SideBar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <SideBar />
    </div>
  );
};

export default HomePage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
