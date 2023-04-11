import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: content-box;
  background-color: ${props => props.theme.colors.BOOKEM_LIGHT_GRAY};
  border-radius: 10px;
  padding: 10px 10px 0 30px;
  margin: 0 3%;
`;

/**
 * Container of Future volunteer events header
 */
export const NavHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

/**
 * Container left side of header
 */
export const NavLeft = styled.div`
  width: 50%;
`;

/**
 * Container of filter icon
 */
export const NavRight = styled.div`
  width: 50%;
  text-align: right;
  position: relative;
  img {
    cursor: pointer;
  }
`;

/**
 * Container of search bar
 */
export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

/**
 * Container for input in search bar
 */
export const Input = styled.input`
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.colors.BOOKEM_BLACK};
  padding: 10px 33px;
  font-size: ${props => props.theme.fontSizes.SMALL};
  background: ${props => props.theme.colors.WHITE};
  width: 75%;
  margin: auto;
`;

/**
 * Button for filter button
 */
export const FilterButton = styled.button`
  border-radius: 100%;
  border: none;
  height: 40px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Container for event card wrapper
 */
export const ImagesWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    width: 75%;
    margin: auto;
  }

  @media (max-width: 767px) {
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
  }
`;

export const AllEventsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px 0 0;
`;

export const AllEvents = styled.div``;
