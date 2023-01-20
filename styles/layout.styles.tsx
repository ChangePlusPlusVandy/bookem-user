import { SideBar } from '@/components/SideBar';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
};
