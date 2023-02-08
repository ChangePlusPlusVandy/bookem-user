import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 500%;
  height: 500%;
  z-index: 5;
  display: flex;
`;

export const Container = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 200px;
  background: gray;
  border-radius: 10px;
  z-index: 10;
  right: 41px;
  top: 0px;
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
      <Container ref={wrapperRef}></Container>
    </>
  );
}
