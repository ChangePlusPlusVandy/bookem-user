import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  background-color: pink;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  width: 100%;
  height: 800px;
`;

const NavHeader = styled.div`
  width: 100%;
  padding: 26px 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

const NavLeft = styled.div`
  width: 50%;
`;

const NavRight = styled.div`
  width: 50%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
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
  background: #fafafa;
  width: 92%;
  margin: auto;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const FutureVolunteerEvents = () => {
  return (
    <Container>
      <NavHeader>
        <NavLeft>Future volunteer Events</NavLeft>
        <NavRight>
          <Image
            src="/filterIcon.png"
            alt="Filter icon"
            width="25"
            height="25"
          />
        </NavRight>
      </NavHeader>

      <SearchBar>
        <Input type="text" placeholder="Search" />
      </SearchBar>
    </Container>
  );
};

export default FutureVolunteerEvents;
