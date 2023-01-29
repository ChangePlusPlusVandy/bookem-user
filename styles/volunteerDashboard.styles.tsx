import styled from 'styled-components';

export const DashboardContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: white;
  padding: 40px;
  position: relative;
`;

export const LogButton = styled.button`
  width: 222px;
  height: 74px;
  background: #6d6d6d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
`;

export const PastActivityButton = styled.button`
  width: 222px;
  height: 74px;
  background: #d6d6d6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;

export const VolunteerButtonsContainer = styled.div`
  margin-top: 50px;
  height: fit-content;
`;

export const VolunteerButtonsFlex = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const VolunteerStatsContainer = styled.div`
  height: fit-content;
  margin-top: 20px;
`;
