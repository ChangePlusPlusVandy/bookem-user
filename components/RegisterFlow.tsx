import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 130px;
  margin-left: 130px;
`;

const DotsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  position: absolute;
  transform: translate(0%, 83.3%);
`;

const LeftArrow = styled.div`
  float: left;
`;

const RightArrow = styled.div`
  float: right;
`;

const ProgressContainer = styled.div`
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 5vh;
  position: absolute;
  bottom: 0;
  width: fit-content;
  align-items: center;
`;

const formatPageDots = (currentPage: number) => {
  const pages = [1, 2, 3, 4];
  const listDots = pages.map(page => {
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
      {formatPageDots(currentPage)}
      <RightArrow>
        {Number(currentPage) != 4 ? (
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
