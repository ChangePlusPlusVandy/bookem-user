import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Steps, StepsProvider, useSteps } from 'react-step-builder';
import Step1 from './Step1';
import Step2 from './Step2';
import FinalStep from './FinalStep';
import { Container } from '/Users/jessieyang/bookem-user/styles/components/futureEvents.styles';

const PageNum = styled.div`
  border-radius: 50px;
  border: solid 1px black;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;

const PageNumHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  line-height: normal;
  vertical-align: center;
`;

const ButtonNav = styled.div`
  align-items: center;
  text-align: center;
  line-height: normal;
  vertical-align: center;
  bottom: 0;
  width: 100%;
  padding: 100px;
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
  background-color: pink;
  border-radius: 50%;
  border: 2px solid black;
  padding: 0 2px;
`;

const WindowFlow = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [iconOneColor, setIconOneColor] = useState('black');
  const [iconTwoColor, setIconTwoColor] = useState('white');
  const [iconThreeColor, setIconThreeColor] = useState('white');

  const numPages = 3;

  const FirstColor = () => {
    // The constant RedColor stores a function
    setIconOneColor('black');
    setIconTwoColor('white');
    setIconThreeColor('white');
    // that changes the value of iconOneColor to red
  };

  const SecondColor = () => {
    // The constant RedColor stores a function
    setIconTwoColor('black');
    setIconOneColor('white');
    setIconThreeColor('white');
    // that changes the value of iconOneColor to red
  };

  const ThirdColor = () => {
    // The constant RedColor stores a function
    setIconThreeColor('black');
    setIconOneColor('white');
    setIconTwoColor('white');
    // that changes the value of iconOneColor to red
  };

  return (
    <Container>
      <PageNumHeader>
        <PageNum id="1" style={{ backgroundColor: iconOneColor }}>
          1
        </PageNum>
        <PageNum id="2" style={{ backgroundColor: iconTwoColor }}>
          2
        </PageNum>
        <PageNum id="3" style={{ backgroundColor: iconThreeColor }}>
          3
        </PageNum>

        {/* <StepsProvider>
        <Steps props={'string'} component={Step1} />
        <MySteps component={Step2} />
        <Step component={FinalStep} />
      </StepsProvider> */}
      </PageNumHeader>

      <ButtonNav>
        <Button
          onClick={() => {
            if (currentPage == 2) {
              FirstColor();
              setCurrentPage(currentPage - 1);
            } else if (currentPage == 3) {
              SecondColor();
              setCurrentPage(currentPage - 1);
            }
          }}>
          <Image
            src="/arrow-left.png"
            alt="Left arrow"
            width="40"
            height="40"
          />
        </Button>

        <Button
          onClick={() => {
            if (currentPage == 0) {
              setCurrentPage(currentPage + 1);
              FirstColor();
            } else if (currentPage == 1) {
              setCurrentPage(currentPage + 1);
              SecondColor();
            } else if (currentPage == 2) {
              setCurrentPage(currentPage + 1);
              ThirdColor();
            }
          }}>
          <Image
            src="/arrow-right.png"
            alt="Right arrow"
            width="40"
            height="40"
          />
        </Button>
      </ButtonNav>
    </Container>
  );
};

export default WindowFlow;
