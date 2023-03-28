import '@/styles/globals.css';
import { Container, MainContent } from '@/styles/layout.styles';
import { DesktopSidebar } from '@/components/DesktopSidebar/DesktopSidebar';
import { SessionProvider } from 'next-auth/react';
import { Media, MediaContextProvider } from '@/lib/media';
import type { AppProps } from 'next/app';
import { MobileSidebar } from '@/components/mobile/MobileSidebar/MobileSidebar';
import { useState } from 'react';
import { Hamburger } from '@/styles/components/Sidebar/hamburger.styles';
import Link from 'next/link';
import { useActiveRoute } from '@/lib/useActiveRoute';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      {session && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {!session && <Component {...pageProps} />}
    </SessionProvider>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const HAMBURGER_ROUTES = ['/', '/volunteer', '/setting'];
  const route = useActiveRoute();
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  const handleHideSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <MediaContextProvider disableDynamicMediaQueries>
      <Media lessThan="sm">
        <Container>
          {/* Sidebar */}
          <MobileSidebar
            showSidebar={showSidebar}
            handleHideSidebar={handleHideSidebar}
          />

          {/* The rest of components */}
          <MainContent>{children}</MainContent>

          {/* Hamburger */}
          {HAMBURGER_ROUTES.includes(route) ? (
            <Hamburger
              src="/sidebar/hamburger.png"
              alt=""
              onClick={handleShowSidebar}
              width={32}
              height={32}
            />
          ) : (
            <></>
          )}
        </Container>
      </Media>
      <Media greaterThanOrEqual="sm">
        <Container>
          <DesktopSidebar />
          <MainContent>{children}</MainContent>
        </Container>
      </Media>
    </MediaContextProvider>
  );
};
