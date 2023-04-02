import styled from 'styled-components';

/**
 * Contain everything
 */
export const EventBox = styled.div`
  @media (min-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 767px) {
    padding: 30px;
    background-color: aliceblue;
  }
`;

/**
 * Contains the book icon and the program name info
 */
export const MiddleBox = styled.div`
  display: flex;
  background-color: pink;
  @media (min-width: 768px) {
    margin: 45px auto auto 30px;
  }

  @media (max-width: 767px) {
    margin: 30px auto auto auto;
  }
`;

/**
 * Contain About and Contact info
 */
export const BottomBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    margin-top: 51px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
    background-color: lightgreen;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-item: center;
  margin: 0 20px 0 20px;
`;

export const AboutContactButton = styled.button`
  background-color: #6b6b6b;
  width: 50vw;
  height: 35px;
  color: white;
`;
