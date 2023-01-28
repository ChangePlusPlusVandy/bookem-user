import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
  width: 500px;
  height: 200px;
  margin-left: 100px;
  background-color: #d2aae6;
`;

const ContactHeader = styled.div``;

const IconBox = styled.div``;

const Icon = styled(Image)``;

const IconText = styled.span``;

interface IconParams {
  src: string;
  text: string;
}

const Contact = () => {
  const iconParamList: IconParams[] = [
    {
      src: '/event/phone.png',
      text: '615-383-3837',
    },
    {
      src: '/event/mail.png',
      text: 'bookem@gmail.com',
    },
  ];

  const iconWidth = 23;
  const iconHeight = 23;
  return (
    <>
      <ContactBox>
        <ContactHeader></ContactHeader>

        {iconParamList.map(iconParam => {
          return (
            <IconBox key={iconParam.src}>
              <Icon
                src={iconParam.src}
                alt=""
                width={iconWidth}
                height={iconHeight}
              />
              <IconText>{iconParam.text}</IconText>
            </IconBox>
          );
        })}
      </ContactBox>
    </>
  );
};

export default Contact;
