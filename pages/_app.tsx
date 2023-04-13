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
import { useActiveRoute } from '@/lib/useActiveRoute';
import { AVAILABLE_ROUTES_ARRAY, BOOKEM_THEME } from '@/utils/constants';
import { ThemeProvider } from 'styled-components';
import '@fontsource/inter';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={BOOKEM_THEME}>
        {session && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        {!session && <Component {...pageProps} />}
      </ThemeProvider>
    </SessionProvider>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Only display hamburger in these routes
  const HAMBURGER_ROUTES = AVAILABLE_ROUTES_ARRAY;
  const route = useActiveRoute();

  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => setShowSidebar(true);
  const handleHideSidebar = () => setShowSidebar(false);

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
            <HamburgerContainer>
              <Hamburger
                src="/sidebar/hamburger.png"
                alt=""
                onClick={handleShowSidebar}
                width={32}
                height={32}
              />
            </HamburgerContainer>
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
