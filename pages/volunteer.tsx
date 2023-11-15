import React from 'react';
import VolunteerDashboard from '@/components/Volunteer/VolunteerDashboard';
import { useUserData } from '@/lib/useUserData';

const VolunteerPage = () => {
  const userData = useUserData();
  return (
    <>
      <VolunteerDashboard userData={userData} />
    </>
  );
};

export default VolunteerPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
