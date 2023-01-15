import React from 'react';

const SettingsPage = () => {
  return <div>Settings</div>;
};

export default SettingsPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
