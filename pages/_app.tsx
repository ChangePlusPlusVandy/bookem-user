import '@/styles/globals.css';
import { Container, MainContent } from '@/styles/layout.styles';
import { DesktopSidebar } from '@/components/Sidebar/DesktopSidebar';
import { SessionProvider } from 'next-auth/react';
import { Media, MediaContextProvider } from '@/lib/media';
import type { AppProps } from 'next/app';
import MobileSidebar from '@/components/mobile/MobileSidebar';

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
  return (
    <MediaContextProvider disableDynamicMediaQueries>
      <Media lessThan="sm">
        {/* TODO: add layout for mobile */}
        <MobileSidebar />
        <MainContent>{children}</MainContent>
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
