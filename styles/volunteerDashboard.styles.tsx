import Link from 'next/link';
import styled from 'styled-components';

/**
 * Container for volunteer dashboard
 */
export const DashboardContainer = styled.div`
  height: fit-content;
  width: 100%;
  padding: 40px;
  position: relative;
`;

/**
 * Button for "Log Hours"
 */
export const LogButton = styled.button`
  background: #6d6d6d;
  border-radius: 10px;
  width: 350px;
  height: 74px;
  padding: 19px;
  margin-top: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

/**
 * Container for log hours and history icons
 */
export const ButtonIcon = styled.div`
  float: left;
  margin: 5px 40px 0 0;
`;

export const HistoryButton = styled(Link)`
  width: 350px;
  height: 74px;
  padding: 19px;
  margin-top: 25px;
  background: #e3e3e3;
  border: 1.5px solid #000000;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  border-color: #d4d4d4;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

/**
 * Container for "Log Hours" and "See History" buttons
 */
export const VolunteerButtonsContainer = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 25px;
  }
`;

/**
 * Container for volunteer stats
 */
export const VolunteerStatsContainer = styled.div`
  margin-top: 20px;
`;
