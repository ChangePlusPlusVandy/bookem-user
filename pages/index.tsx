import styles from '@/styles/Home.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className={styles.container}>
      {status === 'loading' && <div>Loading...</div>}
      {!session && (
        <>
          <div>You are not signed in</div>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          <div>You have signed in as {session.user?.email}</div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
