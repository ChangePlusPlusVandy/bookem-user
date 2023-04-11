import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 98%;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
  padding: 15px;
  border: 1px solid black;
  overflow-x: scroll;
`;

export const EventImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 700;
`;

export const AddressContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const AddressIcon = styled.div`
  margin: 0 10px;
`;

export const Address = styled.div`
  font-size: 14px;

  // Set up overflow
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const CalendarIcon = styled.div`
  display: flex;
  width: 33%;
`;

export const ClockIcon = styled.div`
  display: flex;
  width: 33%;
`;

export const CheckmarkIcon = styled.div`
  display: flex;
  width: 33%;
`;

export const Description = styled.div`
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
