import React from 'react';
import Image from 'next/image';
import {
  DotsContainer,
  DotsFlex,
  LeftArrow,
  RightArrow,
  ProgressContainer,
} from '@/styles/registerFlow.styles';

/**
 * format the dots representing register form pages
 * @param currentPage current register page number
 * @returns well formatted page dots
 */
const formatPageDots = (currentPage: number) => {
  // list of register page numbers
  const pages = [1, 2, 3];

  // maps each register page number to the correct colored dot
  const listDots = pages.map(page => {
    // dot for current page is black
    if (page == currentPage)
      return (
        <Image
          src="/black-dot.png"
          alt="Dot for current page"
          width="12"
          height="12"
          key={page}
        />
      );

    // dot for other pages are white
    return (
      <Image
        src="/white-dot.png"
        alt="Dot for other page"
        width="12"
        height="12"
        key={page}
      />
    );
  });

  return (
    <DotsContainer>
      <DotsFlex>{listDots}</DotsFlex>
    </DotsContainer>
  );
};

/**
 * format the left and right arrows with respect to the page dots
 * @param currentPage current register page number
 * @param form id of the form corresponding to the register page
 * @param handleLeftArrow function for handling clicking the left arrow
 * @param handleRightArray function for handling clicking the right arrow
 * @returns well formatted register flow component
 */
const RegisterFlow = ({
  currentPage,
  form,
  handleLeftArrow,
  handleRightArrow,
}: {
  currentPage: number;
  form: string;
  handleLeftArrow: Function;
  handleRightArrow: Function;
}) => {
  return (
    <ProgressContainer>
      {/* left arrow does not appear on register page 1 */}
      <LeftArrow>
        {Number(currentPage) != 1 ? (
          <input
            form={form}
            type="image"
            src="/left-arrow.png"
            height="20px"
            width="10px"
            alt="Button for previous page"
            onClick={() => handleLeftArrow()}
          />
        ) : null}
      </LeftArrow>

      {/* format the page dots */}
      {formatPageDots(currentPage)}

      {/* right arrow does not appear on register page 4 */}
      <RightArrow>
        {Number(currentPage) != 3 ? (
          <input
            form={form}
            type="image"
            src="/right-arrow.png"
            height="20px"
            width="10px"
            alt="Button for next page"
            onClick={() => handleRightArrow()}
          />
        ) : null}
      </RightArrow>
    </ProgressContainer>
  );
};

export default RegisterFlow;
