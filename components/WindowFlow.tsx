import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Container } from '@/styles/components/futureEvents.styles';

const PageNum = styled.div`
  border-radius: 50px;
  border: solid 1px black;
  height: 50px;
  width: 50px;
  margin: 0 10px 10px 10px;
  padding-left: 20px;
  padding-top: 15px;
  display: flex;
`;

const PageTitle = styled.div`
  padding-top: 15px;
`;

const PageNumHeader = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 15px;
  width: 90%;
  justify-content: center;
`;

const ButtonRight = styled.div`
  bottom: 30px;
  position: absolute;
  right: 30px;
`;
const ButtonLeft = styled.div`
  bottom: 30px;
  position: absolute;
  left: 30px;
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;
  padding: 0 2px;
`;

const ImageWrapper = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;

const WindowFlow = ({ children }: { children: React.ReactNode }) => {
  // a variable for the page header alongside names for the pages
  // this is an input into this Windowflow component
  const pages = ['Event', 'Program', 'More Information'];
  const numPages = pages.length;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // if it's increment, then we only need to change the lement at index and index + 1
    // if decrement then we only need to change the element at index - 1 and index
    //
    // for each of our pages
    pages.forEach((page, index) => {
      // get the document element
      const currPage = document.getElementById((index + 1).toString());

      if (!currPage) {
        return;
      }

      // if current page (then we need to set background to black)
      if (index == currentPage - 1) {
        currPage.style.backgroundColor = 'black';
        currPage.style.color = 'white';
      } else {
        // if not current page, then set it to white
        currPage.style.backgroundColor = 'white';
        currPage.style.color = 'black';
      }
    });
  }, [currentPage]);

  const navigateBack = () => {
    if (currentPage <= numPages && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const navigateForward = () => {
    if (currentPage >= 0 && currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <PageNumHeader>
        {pages.map((page, index) => {
          return (
            <>
              <PageNum id={(index + 1).toString()}>{index + 1}</PageNum>
              <PageTitle>{pages[index]}</PageTitle>

              {index < pages.length - 1 ? (
                <ImageWrapper>
                  <Image
                    src="/line.png"
                    alt="Line between page titles"
                    width="40"
                    height="1"
                  />
                </ImageWrapper>
              ) : null}

              <ButtonLeft>
                {currentPage > 1 ? (
                  <Button onClick={navigateBack}>
                    <Image
                      src="/arrow-left.png"
                      alt="Left arrow"
                      width="40"
                      height="40"
                    />
                  </Button>
                ) : null}
              </ButtonLeft>
              <ButtonRight>
                {currentPage < pages.length ? (
                  <Button onClick={navigateForward}>
                    <Image
                      src="/arrow-right.png"
                      alt="Right arrow"
                      width="40"
                      height="40"
                    />
                  </Button>
                ) : null}
              </ButtonRight>
            </>
          );
        })}
      </PageNumHeader>
    </Container>
  );
};

export default WindowFlow;
