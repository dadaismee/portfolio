import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { h1, h2 } from '../styles/TextStyles';

const Hero = () => {
  return (
    <Wrapper>
      <Title
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.165, 0.84, 0.44, 1],
            duration: 1,
            delay: 0.25,
          },
        }}
        viewport={{ once: true }}>
        Valerii Shevchenko
      </Title>
      <GridWrapper>
        <Subtitle
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.165, 0.84, 0.44, 1],
              duration: 1,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}>
          product and service designer
        </Subtitle>
        {/* <Subtitle
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.165, 0.84, 0.44, 1],
              duration: 1,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}>
          product manager
        </Subtitle> */}
      </GridWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: var(--padding);
  /* padding: 0 60px 40px; */

  @media (max-width: ${mediaQueries.phone}) {
    gap: 20px;
    padding: var(--padding-mobile) 40px;
  }
`;

const Title = styled(h1)`
  padding: 20px 0;

  @media (max-width: ${mediaQueries.phone}) {
    padding: 0;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
  /* margin-bottom: 40px; */

  @media (max-width: ${mediaQueries.phone}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Subtitle = styled(h2)`
  grid-column: 5 / 8;
  margin: 0px;
  padding-left: 1.38vw; // 20px;
  text-align: left;

  @media (max-width: ${mediaQueries.phone}) {
    grid-column: 1 / 3;
    text-align: right;
  }
`;
