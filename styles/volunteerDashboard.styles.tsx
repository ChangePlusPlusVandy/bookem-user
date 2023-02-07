import Link from 'next/link';
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;

  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.div`
  float: left;
  margin-right: 40px;
`;

export const HistoryButton = styled(Link)`
  width: 350px;
  height: 88px;
  padding: 19px;
  padding-top: 25px;

  background: #e3e3e3;
  border: 1.5px solid #000000;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #000000;

  display: flex;
  align-items: center;
`;

export const VolunteerButtonsContainer = styled.div`
  margin-top: 50px;
  height: fit-content;
`;

export const VolunteerButtonsFlex = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const VolunteerStatsContainer = styled.div`
  height: fit-content;
  margin-top: 20px;
`;
