import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.h2`
  font-family: ${props => props.theme.fonts.PRIMARY};
  font-size: 25px;
  margin-top: 50px;
  font-weight: 400;
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.PRIMARY};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-left: 35px;
`;

export const IconLink = styled(Link)`
  margin-top: 35px;
  margin-right: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;

export const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.BOOKEM_LIGHT_GRAY};
  width: 95%;
  margin: 0 auto 20px auto;
  border-radius: 10px;
  padding: 10px;
`;
