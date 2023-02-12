import styled from 'styled-components';

export const DashboardContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: white;
  padding: 40px;
  position: relative;
`;

export const LogButton = styled.button`
  background: #6d6d6d;
  border-radius: 10px;
  width: 350px;
  height: 88px;
  padding: 19px;
  padding-top: 25px;
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

export const ButtonIcon = styled.div`
  float: left;
  margin-right: 40px;
`;

export const HistoryButton = styled.button`
  width: 350px;
  height: 88px;
  padding: 19px;
  padding-top: 25px;
  background: #e3e3e3;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

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

export const VolunteerStatsContainer = styled.div`
  margin-top: 20px;
`;
