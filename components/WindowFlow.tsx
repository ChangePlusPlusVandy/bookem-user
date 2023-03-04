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
  WindowFlowContainer,
} from '@/styles/components/windowFlow.styles';

const WindowFlow = ({
  pages,
  components,
}: {
  // the array of strings at the top of the window flow
  pages: string[];
  // the array of components to render in the window flow
  components: React.ReactNode[];
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

  // function to update the page number if the back arrow is clicked
  const navigateBack = () => {
    if (currentPage <= numPages && currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  // function to update the page number if the forward arrow is clicked
  const navigateForward = () => {
    if (currentPage >= 0 && currentPage < numPages)
      setCurrentPage(currentPage + 1);
  };

  return (
    <WindowFlowContainer>
      {/** Page header with page numbers and titles */}
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
      </PageNumHeader>

      {/** Render the current page */}
      {components.map((comp, index) => {
        if (currentPage === index + 1) return comp;
      })}

      {/** Buttons for submit and navigating pages */}
      <BottomContainer>
        {/** Back arrow appears if not on first page */}
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

        {/** Forward arrow appears if not on last page */}
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

        {/** Submit button appears if on last page */}
        {currentPage == pages.length && (
          <ButtonCenter>
            <SubmitButton>Submit</SubmitButton>
          </ButtonCenter>
        )}
      </BottomContainer>
    </WindowFlowContainer>
  );
};

export default WindowFlow;
