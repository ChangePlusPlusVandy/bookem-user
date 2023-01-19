import { SideBar } from '@/components/SideBar';
import React from 'react';

const VolunteerPage = () => {
  return (
    <div>
      <SideBar />
      VolunteerPage
    </div>
  );
};

export default VolunteerPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
