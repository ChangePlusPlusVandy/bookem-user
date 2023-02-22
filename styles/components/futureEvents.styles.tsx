import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavHeader = styled.div`
  border-top: 1px solid #000000;
  width: 100%;
  padding: 26px 60px;
  display: flex;
  align-items: center;
`;

export const NavLeft = styled.div`
  width: 50%;
`;

export const NavRight = styled.div`
  position: relative;
  width: 50%;
  text-align: right;
  img {
    cursor: pointer;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

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

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  width: 75%;
  margin: auto;
`;

export const FilterButton = styled.button`
  border-radius: 100%;
  border: none;
  height: 40px;
  width: 40px;
`;
