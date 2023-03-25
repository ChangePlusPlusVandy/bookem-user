import Link from 'next/link';
import styled from 'styled-components';

/**
 * Container of sidebar
 */
export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    width: 120px;
    background-color: #6d6d6d;
  }
  @media (max-width: 767px) {
    position: relative;
    /* text-align: center; */
    width: 100%;
    background-color: white;
  }
`;

/**
 * Container of icon
 */
export const IconContainer = styled.div`
  padding-top: 20px;

  @media (min-width: 768px) {
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;

/**
 * Make each icon a link
 * @hoveredsrc src of the img when hovered or focused
 * @backgroundcolor The background color of the link according to the route
 * @imgsrc The src of the icon according to the route
 */
export const IconLink = styled(Link)<{
  hoveredsrc: string;
  backgroundcolor: string;
  imgsrc: string;
}>`
  display: inline-block;
  padding: 25px 0px 25px 0px;
  width: 100%;
  background-color: ${props => props.backgroundcolor};
  border-radius: 10px;

  img {
    content: url(${props => props.imgsrc});
  }

  &:hover {
    background-color: #d9d9d9;
    img {
      content: url(${props => props.hoveredsrc});
    }
  }
`;

export const IconText = styled.span``;
