import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

/**
 * Container of Future volunteer events header
 */
export const NavHeader = styled.div`
  @media (min-width: 768px) {
    border-top: 1px solid #000000;
  }
  width: 100%;
  padding: 26px 60px;
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
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 15px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 15px;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  background: #d9d9d9;
  width: 92%;
  margin: auto;

  &:active,
  &:focus {
    text-align: left;
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

/**
 * Button for filter button
 */
export const FilterButton = styled.button`
  border-radius: 100%;
  border: none;
  height: 40px;
  width: 40px;
`;
