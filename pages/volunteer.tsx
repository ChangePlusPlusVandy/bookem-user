import React from 'react';
import VolunteerDashboard from '@/components/Volunteer/VolunteerDashboard';

const VolunteerPage = () => {
  return (
    <>
      <VolunteerDashboard />
    </>
  );
};

export default VolunteerPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
