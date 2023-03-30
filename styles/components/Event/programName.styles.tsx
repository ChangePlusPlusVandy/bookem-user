import styled from 'styled-components';

export const ProgramNameBox = styled.div`
  height: auto;
  margin-left: 82px;
  @media (min-width: 768px) {
  }

  @media (max-width: 767px) {
    background-color: lightyellow;
    padding-top: 30px;
  }
`;

export const NameAndSpot = styled.div`
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 50px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

export const StatusBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusBullet = styled.li`
  font-size: 40px;
`;
export const Status = styled.span`
  font-size: 25px;
  line-height: 40px;
  margin-left: 20px;
`;

export const SignupButton = styled.button`
  width: 150px;
  margin-top: 30px;
  padding: 12px;
  background: #5a5a5a;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
