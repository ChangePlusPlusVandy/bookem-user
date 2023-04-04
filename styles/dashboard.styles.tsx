import styled from 'styled-components';

/**
 * Main dashboard layout
 */
export const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 24vw;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 0vw;
  }
`;

/**
 * Container for all contents
 */
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px 40px;
  overflow-y: auto;
  position: relative;
  font-style: normal;
  font-weight: 400;
`;

export const GreetingContainer = styled.div`
  height: fit-content;
`;

/**
 * Text that greets user
 */
export const Greeting = styled.p`
  font-size: 40px;
  line-height: 48px;
  padding-right: 55px;

  @media (max-width: 767px) {
    padding-right: 70px;
  }
`;

/**
 * Info icon
 */
export const InfoIcon = styled.div`
  position: absolute;
  top: 65px;
  right: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    right: 65px;
    // TODO: should I make it in line with the hamburger?
    /* top: 95px; */
  }
`;

/**
 * Header for accomplishments and your events
 */
export const Header = styled.p`
  margin-bottom: 29px;
  font-size: 25px;
  line-height: 30px;
`;

/**
 * Flex box for the three statistics
 */
export const StatsFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

/**
 * Child statistics of stats flex box
 */
export const FlexChild = styled.div`
  flex: 0 1 auto;
  margin: 10px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

/**
 * Number of a statistic
 */
export const StatsNumber = styled.p`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
`;

/**
 * Description of a statistic
 */
export const StatsDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;
