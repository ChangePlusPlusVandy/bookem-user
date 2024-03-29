import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

/**
 * Container of sidebar icons
 */
export const Container = styled.div`
  // Desktop version is a flex box that contains sidebar + user icon
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    width: 120px;
    background-color: ${props => props.theme.colors.BOOKEM_LIGHT_GRAY};
  }

  // Mobile version is not flex
  @media (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.WHITE};
    z-index: 1;
  }
`;

/**
 * Contain user icon and cross button in mobile
 */
export const Header = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

/**
 * Cross image
 */
export const Cross = styled(Image)`
  margin: 76px 29px 100px 0;
  &:hover {
    cursor: pointer;
  }
`;

/**
 * Flexbox that contains the icons other than user icon
 */
export const MobileIconsContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

/**
 * Container of icon
 */
export const IconContainer = styled.div`
  @media (max-width: 767px) {
    margin: 25px 0px 0 25px;
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

  // Round border for mobile
  @media (max-width: 767px) {
    border-radius: 10px;
  }

  // Change image of icon dynamically
  img {
    content: url(${props => props.imgsrc});
  }
`;

/**
 * Contains the icon image + the text
 * Flex horizontally
 */
export const IconFlexBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 767px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

/**
 * Text associated with an icon
 * @color Color of the text
 */
export const IconText = styled.span<{ color: string }>`
  color: ${props => props.color};
  font-family: ${props => props.theme.fonts.PRIMARY};
  font-style: normal;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
  line-height: 24px;
`;
