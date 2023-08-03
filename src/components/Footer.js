import React from 'react';
import { styled } from 'styled-components';
import { paragraph } from '../styles/TextStyles';

const Footer = () => {
  return (
    <Wrapper>
      <Copy>V--S © 2023</Copy>
      <Branding>
        <Image />
        /
        <Image />
        by V--S
      </Branding>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin: 0 60px;
  display: flex;
`;

const Copy = styled(paragraph)``;
const Branding = styled.div`
  display: flex;
`;
const Image = styled.img``;
