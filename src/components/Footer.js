import React from 'react';
import { styled } from 'styled-components';
import { paragraph } from '../styles/TextStyles';
import { createLogo } from './Header';
import design from '../images/icons/design.svg';
import code from '../images/icons/code.svg';

const Footer = () => {
  return (
    <Wrapper>
      <Copy>V--S © 2023</Copy>
      <Branding>
        <Image src={design} />
        /
        <Image src={code} style={{ marginRight: '5px' }} />
        <Copy>by V--S</Copy>
      </Branding>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin: 120px 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const Copy = styled(paragraph)`
  font-weight: 700;
`;
const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;
const Image = styled.img``;
