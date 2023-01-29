import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

/**
 * Container of sidebar
 */
export const SideBarBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: space-between;
  width: 120px;
  height: 100vh;
  background-color: #6d6d6d;
`;

/**
 * Container of icon
 */
export const IconBox = styled.div`
  padding-top: 20px;
`;

/**
 * Make each icon a link
 * @hoveredSrc src of the img when hovered or focused
 * @backgroundColor The background color of the link according to the route
 * @imgSrc The src of the icon according to the route
 */
export const IconLink = styled(Link)<{
  hoveredSrc: string;
  backgroundColor: string;
  imgSrc: string;
}>`
  display: inline-block;
  padding: 25px 0px 25px 0px;
  width: 100%;
  background-color: ${props => props.backgroundColor};

  img {
    content: url(${props => props.imgSrc});
  }

  &:hover {
    background-color: #d9d9d9;
    img {
      content: url(${props => props.hoveredSrc});
    }
  }
`;

/**
 * Icon image
 */
export const Icon = styled(Image)``;
