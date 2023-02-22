import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 98.5%;
  height: ${(300 / 328) * 82}px;
  border-radius: 10px;
  padding: ${(300 / 328) * 17}px;
  margin: ${(300 / 328) * 17}px;
  margin-left: ${(300 / 328) * 6}px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`;

export const EventImage = styled.div`
  display: flex;
  justify-content: left;
  margin-top: ${300 / 328}px;
  margin-left: ${(300 / 328) * 20}px;
`;

export const Name = styled.div`
  background-color: white;
  margin-top: ${(300 / 328) * 16}px;
  margin-left: ${(300 / 328) * 40}px;
  height: ${(300 / 328) * 30}px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
`;

export const AddressContainer = styled.div`
  position: absolute;
  height: fit-content;
  margin-top: ${(300 / 328) * 16}px;
  margin-left: ${(300 / 328) * 300}px;
  background-color: red;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
`;

export const AddressIcon = styled.div`
  float: left;
  position: absolute;
  margin-left: 50px;
  margin-right: 8px;
`;

export const Address = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 78px;
  line-height: ${(300 / 328) * 22}px;
  width: 175px;
  white-space: break-word;
`;

export const InfoContainer = styled.div`
  position: absolute;
  height: fit-content;
  margin-top: ${(300 / 328) * 16}px;
  margin-left: ${(300 / 328) * 400}px;
  background-color: white;
`;

export const ClockIcon = styled.div`
  position: absolute;
  float: left;
  margin-left: 340px;
  z-index: 1;
`;

export const CalendarIcon = styled.div`
  float: left;
  margin-left: 150px;
`;

export const CheckmarkIcon = styled.div`
  position: absolute;
  float: left;
  margin-left: 520px;
  z-index: 1;
`;

export const InfoFlex = styled.div`
  height: fit-content;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const InfoFlexChild = styled.div`
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  margin-left: ${(300 / 328) * 8}px;
  margin-right: ${(300 / 328) * 8}px;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
`;

export const Time = styled.div`
  position: absolute;
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  margin-left: 348px;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
  width: 100px;
  white-space: break-word;
`;

export const Books = styled.div`
  position: absolute;
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  margin-left: 538px;
  margin-right: ${(300 / 328) * 8}px;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
  width: 150px;
  white-space: break-word;
`;
