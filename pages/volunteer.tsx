import React from 'react';

const VolunteerPage = () => {
  return <>Volunteer</>;
};

export default VolunteerPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
