import '@/styles/globals.css';
import { Container, MainContent } from '@/styles/layout.styles';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { SessionProvider } from 'next-auth/react';
import { Media, MediaContextProvider } from '@/lib/media';
import type { AppProps } from 'next/app';

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
      {/* <Media lessThan="sm"> */}
      {/* TODO: add layout for mobile */}
      {/* <div>Hello mobile</div>
      </Media> */}
      {/* <Media greaterThanOrEqual="sm"> */}
      <Container>
        {/* <Sidebar /> */}
        <MainContent>{children}</MainContent>
      </Container>
      {/* </Media> */}
    </MediaContextProvider>
  );
};
