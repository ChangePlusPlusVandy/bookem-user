import Link from 'next/link';
import styled from 'styled-components';

/**
 * Container for volunteer dashboard
 */
export const DashboardContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: white;
  position: relative;
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 767px) {
    padding: 40px 40px 0 40px;
  }
`;

/**
 * Container for "Log Hours" and "See History" buttons
 */
export const VolunteerButtonsContainer = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
  @media (max-width: 767px) {
    /* flex-direction: column; */
    justify-content: space-between;
    gap: 50px;
  }
`;

/**
 * Button for "Log Hours"
 */
export const VolunteerButton = styled.button<{ backgroundcolor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  // Prevent switching to new line
  white-space: nowrap;

  border-radius: 10px;
  border: 0px solid;
  padding: 19px;
  margin-top: 25px;

  background-color: ${props => props.backgroundcolor};
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 74px;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
  }

  @media (max-width: 767px) {
    width: 250px;
    height: 60px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
  }
`;

export const ButtonText = styled.span<{ textcolor: string }>`
  display: inline-block;
  color: ${props => props.textcolor};
`;

/**
 * Container for log hours and history icons
 */
export const ButtonIcon = styled.div`
  float: left;
  @media (min-width: 768px) {
    margin: 5px 40px 0 0;
  }
  @media (max-width: 767px) {
    margin: 5px 20px 0 0;
  }
`;

/**
 * Container for volunteer stats
 */
export const VolunteerStatsContainer = styled.div`
  margin-top: 20px;
`;
