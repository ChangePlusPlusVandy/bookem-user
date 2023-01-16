import Home from '@/pages/index';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { UserIcon } from './UserIcon';
import HomeImg from '../../public/sidebar/Home.png';
import VolunteerImg from '../../public/sidebar/Handshake.png';
import DonateImg from '../../public/sidebar/CurrencyDollar.png';
import SettingImg from '../../public/sidebar/Setting.png';

const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: space-between;
  width: 156px;
  height: 100vh;
  background-color: #6d6d6d;
`;

const IconBox = styled.div``;

const IconLink = styled.a`
  display: inline-block;
  padding: 25px 0px 25px 0px;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #d9d9d9;
  }
`;

const HomeIcon = styled(Image)``;

const VolunteerIcon = styled(Image)``;

const iconWidth = 41.25;
const iconHeight = 42.47;

export const SideBar = () => {
  return (
    <>
      <SideBarBox>
        <IconBox>
          <UserIcon />
        </IconBox>
        <IconBox>
          <IconLink href="#">
            <HomeIcon
              src={HomeImg}
              alt=""
              width={iconWidth}
              height={iconHeight}
            />
          </IconLink>
        </IconBox>
        <IconBox>
          <IconLink href="#">
            <VolunteerIcon
              src={VolunteerImg}
              alt=""
              width={iconWidth}
              height={iconHeight}
            />
          </IconLink>
        </IconBox>
        <IconBox>
          <IconLink href="#">
            <VolunteerIcon
              src={DonateImg}
              alt=""
              width={iconWidth}
              height={iconHeight}
            />
          </IconLink>
        </IconBox>
        <IconBox>
          <IconLink href="#">
            <VolunteerIcon
              src={SettingImg}
              alt=""
              width={iconWidth}
              height={iconHeight}
            />
          </IconLink>
        </IconBox>
      </SideBarBox>
    </>
  );
};
