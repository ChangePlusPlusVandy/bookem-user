import styled from 'styled-components';

export const PageNumHeader = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;
  justify-content: center;
  overflow: hidden;
`;

export const PageNum = styled.div`
  border-radius: 50%;
  border: solid 1px black;
  height: 50px;
  width: 50px;
  margin: 0 10px 10px 10px;
  padding: 15px 20px;
`;

export const PageTitle = styled.div`
  padding-top: 15px;
`;

export const ImageWrapper = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 30px;
  height: 50px;
  width: 100%;
  display: flex;
`;

export const ButtonLeft = styled.div`
  position: absolute;
  left: 30px;
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;
  padding: 0 2px;
`;

export const ButtonRight = styled.div`
  position: absolute;
  right: 30px;
`;

export const ButtonCenter = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  font-size: 23px;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
`;
