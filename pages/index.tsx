import { useSession, signOut } from 'next-auth/react';
import styles from '@/styles/Home.module.css';
import LoginPage from './login';
import LeftDisplay from '@/components/LeftDisplay';
import LoginPage1 from '@/components/LoginPage1';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <LoginPage1></LoginPage1>
  )
}

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
