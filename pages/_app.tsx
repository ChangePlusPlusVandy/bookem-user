import '@/styles/globals.css';
import { Container, MainContent } from '@/styles/layout.styles';
import { DesktopSidebar } from '@/components/DesktopSidebar/DesktopSidebar';
import { SessionProvider } from 'next-auth/react';
import { Media, MediaContextProvider } from '@/lib/media';
import type { AppProps } from 'next/app';
import { MobileSidebar } from '@/components/mobile/MobileSidebar/MobileSidebar';
import { useState } from 'react';
import {
  Hamburger,
  HamburgerContainer,
} from '@/styles/components/Sidebar/hamburger.styles';
import Link from 'next/link';

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
  const [showSidebar, setShowSidebar] = useState(true);
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
          <MobileSidebar
            showSidebar={showSidebar}
            handleHideSidebar={handleHideSidebar}
          />
          <MainContent>{children}</MainContent>
          <HamburgerContainer href="#" onClick={handleShowSidebar}>
            <Hamburger
              src="/sidebar/hamburger.png"
              alt=""
              width={32}
              height={32}
            />
          </HamburgerContainer>
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
