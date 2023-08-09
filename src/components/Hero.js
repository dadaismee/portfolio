import React from 'react';
import { styled } from 'styled-components';
import { h1, h2 } from '../styles/TextStyles';

const Hero = () => {
  return (
    <Wrapper>
      {/* <Canvas /> */}
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
        viewport={{ once: true }}
      >
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
          viewport={{ once: true }}
        >
          design generalist
        </Subtitle>
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
          viewport={{ once: true }}
        >
          creative coder
        </Subtitle>
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
  grid-template-columns: var(--grid-columns);
`;

const Subtitle = styled(h2)`
  grid-column: 5 / 8;
  margin: 0px;
  padding-left: 1.38vw; // 20px;
  text-align: left;
`;
