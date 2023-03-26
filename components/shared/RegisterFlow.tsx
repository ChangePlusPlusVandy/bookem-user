import React from 'react';
import Image from 'next/image';
import { FieldValues, UseFormGetValues } from 'react-hook-form';
import {
  DotsFlex,
  Arrow,
  ProgressContainer,
} from '@/styles/registerFlow.styles';

/**
 * format the dots representing register form pages
 * @param currentPage current register page number
 * @returns well formatted page dots
 */
const formatPageDots = (currentPage: number) => {
  // list of register page numbers
  const pages = [1, 2, 3, 4, 5];

  // maps each register page number to the correct colored dot
  const listDots = pages.map(page => {
    // dot for current page is black
    if (page == currentPage)
      return (
        <Image
          src="/registerFlow/black-dot.png"
          alt="Dot for current page"
          width="12"
          height="12"
          key={page}
        />
      );

    // dot for other pages are white
    return (
      <Image
        src="/registerFlow/white-dot.png"
        alt="Dot for other page"
        width="12"
        height="12"
        key={page}
      />
    );
  });

  return <DotsFlex>{listDots}</DotsFlex>;
};

/**
 * format the left and right arrows with respect to the page dots
 * @param currentPage current register page number
 * @param form id of the form corresponding to the register page
 * @param getValues function for getting inputs of register page form
 * @param handleLeftArrow function for handling clicking the left arrow
 * @param handleRightArray function for handling clicking the right arrow
 * @returns well formatted register flow component
 */
const RegisterFlow = ({
  currentPage,
  form,
  getValues,
  handleLeftArrow,
  handleRightArrow,
}: {
  currentPage: number;
  form: string;
  getValues: UseFormGetValues<FieldValues>;
  handleLeftArrow: Function;
  handleRightArrow: Function;
}) => {
  return (
    <ProgressContainer>
      {/* left arrow does not appear on register page 1 */}
      <Arrow visible={Number(currentPage) != 1}>
        <Image
          src="/registerFlow/left-arrow.png"
          height="20"
          width="10"
          alt="Button for previous page"
          onClick={() => handleLeftArrow(getValues())}
        />
      </Arrow>

      {/* format the page dots */}
      {formatPageDots(currentPage)}

      {/* right arrow does not appear on register page 5 */}
      <Arrow visible={Number(currentPage) != 5}>
        <input
          form={form}
          type="image"
          src="/registerFlow/right-arrow.png"
          height="20px"
          width="10px"
          alt="Button for next page"
          onClick={() => handleRightArrow()}
        />
      </Arrow>
    </ProgressContainer>
  );
};

export default RegisterFlow;
