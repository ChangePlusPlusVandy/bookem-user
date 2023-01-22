import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-top: 1px solid #000000;
`;

export const NavHeader = styled.div`
  width: 100%;
  padding: 26px 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const NavLeft = styled.div`
  width: 50%;
`;

export const NavRight = styled.div`
  width: 50%;
  text-align: right;

  svg {
    margin-right: 20px;
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
  color: black;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  background: #d9d9d9;
  width: 92%;
  margin: auto;

  background-image: url(search-icon.png);
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 5px;

  &:active,
  &:focus {
    text-align: left;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  flex-basis: 50%;
  flex-basis: calc(20.333%);
  margin: 40px;
  cursor: pointer;
  align-items: center;
`;

export const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;

  svg {
    margin-right: 10px;
  }
`;

export const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  padding: 80px;
  padding-top: 20px;
  border-radius: 7px;
  border: 1px solid #6b6b6b;
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 60%;
  justify-content: center;
  margin: auto;
`;
