import {
  Background,
  Container,
  FilterText,
} from '@/styles/components/Volunteer/filterEventsPopup.styles';
import React, { useEffect, useRef } from 'react';

type Props = {
  hidePopup: () => void;
  sortDescendingSpots: () => void;
  sortAscendingSpots: () => void;
  sortMostRecent: () => void;
  sortLeastRecent: () => void;
};

const FilterEventsPopup = ({
  hidePopup,
  sortDescendingSpots,
  sortAscendingSpots,
  sortMostRecent,
  sortLeastRecent,
}: Props) => {
  const useOutsideAlerter = (ref: React.RefObject<HTMLElement>) => {
    //function to detect click outside of element
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          hidePopup();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <Background />
      <Container ref={wrapperRef}>
        <FilterText onClick={sortMostRecent}>Most Recent</FilterText>
        <FilterText onClick={sortLeastRecent}>Least Recent</FilterText>
        <span />
        <FilterText onClick={sortDescendingSpots}>Most Spots</FilterText>
        <FilterText onClick={sortAscendingSpots}>Least Spots</FilterText>
      </Container>
    </>
  );
};

export default FilterEventsPopup;
