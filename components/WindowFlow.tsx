import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import {
  PageNum,
  PageTitle,
  PageNumHeader,
  ButtonRight,
  ButtonLeft,
  ArrowButton,
  ImageWrapper,
  SubmitButton,
  ButtonCenter,
  BottomContainer,
} from '@/styles/components/windowFlow.styles';

const WindowFlow = ({
  pages,
  children,
}: {
  // the array of strings at the top of the window flow
  pages: string[];
  // the children component to render inside of window flow
  children: React.ReactNode;
}) => {
  const numPages = pages.length;

  // set the current page to 1
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect to update the color of the navigation circle
  useEffect(() => {
    pages.forEach((_, index) => {
      // get the document element
      const currPage = document.getElementById((index + 1).toString());

      if (!currPage) return;

      // if current page (then set background to black)
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
    if (currentPage <= numPages && currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  const navigateForward = () => {
    if (currentPage >= 0 && currentPage < numPages)
      setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <PageNumHeader>
        {pages.map((page, index) => {
          return (
            <>
              <PageNum id={(index + 1).toString()}>{index + 1}</PageNum>
              <PageTitle>{page}</PageTitle>

              {index < pages.length - 1 && (
                <ImageWrapper>
                  <Image
                    src="/line.png"
                    alt="Line between page titles"
                    width="40"
                    height="1"
                  />
                </ImageWrapper>
              )}
            </>
          );
        })}
        <BottomContainer>
          {currentPage > 1 && (
            <ButtonLeft>
              <ArrowButton onClick={navigateBack}>
                <Image
                  src="/arrow-left.png"
                  alt="Left arrow"
                  width="40"
                  height="40"
                />
              </ArrowButton>
            </ButtonLeft>
          )}
          {currentPage == pages.length && (
            <ButtonCenter>
              <SubmitButton>Submit</SubmitButton>
            </ButtonCenter>
          )}
          {currentPage < pages.length && (
            <ButtonRight>
              <ArrowButton onClick={navigateForward}>
                <Image
                  src="/arrow-right.png"
                  alt="Right arrow"
                  width="40"
                  height="40"
                />
              </ArrowButton>
            </ButtonRight>
          )}
        </BottomContainer>
      </PageNumHeader>
      {children}
    </>
  );
};

export default WindowFlow;
