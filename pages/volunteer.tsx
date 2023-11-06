import React from 'react';
import VolunteerDashboard from '@/components/Volunteer/VolunteerDashboard';

const userData = {
  name: 'Carol He',
  hoursVolunteered: 10,
  booksShared: 5,
  dollarsDonated: 100,
  booksDistributed: 231,
  eventsAssisted: 15,
};

const VolunteerPage = () => {
  return (
    <>
      <VolunteerDashboard userData={userData} />

    </>
  );
};

export default VolunteerPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
