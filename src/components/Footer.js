import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { paragraph } from '../styles/TextStyles';

const Footer = () => {
  return (
    <Wrapper>
      <Copy>Valerii Shevchenko © {new Date().getFullYear()}</Copy>
      <Copy>All rights reserved.</Copy>
      {/* <Branding>
        <Image src={design} />
        /
        <Image src={code} style={{ marginRight: '5px' }} />
        <Copy>by V-S</Copy>
      </Branding> */}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin: 120px 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
    margin-top: 80px;
  }
`;

const Copy = styled(paragraph)`
  font-weight: 700;
`;
const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;
const Image = styled.img``;
