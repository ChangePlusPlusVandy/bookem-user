import { signOut, useSession } from 'next-auth/react';
import styles from '@/styles/Home.module.css';
import React from 'react';

const SettingsPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      {session && (
        <>
          <div>You have signed in as {session.user?.email}</div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default SettingsPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
