import React from 'react';
import { styled } from 'styled-components';
import { h1, h2 } from '../styles/TextStyles';

const Hero = () => {
  return (
    <Wrapper>
      {/* <Canvas /> */}
      <Title>Valerii Shevchenko</Title>
      <GridWrapper>
        <Subtitle>deisng generalist</Subtitle>
        <Subtitle>creative coder</Subtitle>
      </GridWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  margin: 0 60px;
`;

const Title = styled(h1)``;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* row-gap: 20px; */
`;

const Subtitle = styled(h2)`
  grid-column: 5 / 8;
  margin: 0px;
  padding-left: 20px;
  text-align: left;
`;
