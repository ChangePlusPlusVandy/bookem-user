import React from 'react';
import VolunteerDashboard from '@/components/Volunteer/VolunteerDashboard';
import WindowFlow from '@/components/WindowFlow';

const VolunteerPage = () => {
  return (
    <>
      <VolunteerDashboard />
      <WindowFlow children={undefined} />
    </>
  );
};

export default VolunteerPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
