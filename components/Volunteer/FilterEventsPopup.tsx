import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 500%;
  z-index: 5;
  display: flex;
  overflow: hidden;
`;

export const Container = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 180px;
  background: gray;
  border-radius: 10px;
  z-index: 10;
  right: 0px;
  top: 40px;
  display: flex;
  padding: 30px;
  gap: 10px;
`;

const FilterText = styled.button`
  width: 100px;
  border: none;
`;

type Props = {
  hidePopup: () => void;
};

export default function FilterEventsPopup({ hidePopup }: Props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLElement>) {
    //function to detect click outside of element
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          hidePopup();
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <Background></Background>
      <Container ref={wrapperRef}>
        <FilterText>Most Recent</FilterText>
        <FilterText>Least Recent</FilterText>
        <FilterText>Most Spots</FilterText>
        <FilterText>Least Spots</FilterText>
      </Container>
    </>
  );
}
