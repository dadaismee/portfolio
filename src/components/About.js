import React from 'react';
import { styled } from 'styled-components';
import { paragraph, sectionTitle } from '../styles/TextStyles';

const About = () => {
  return (
    <Wrapper>
      <AboutBlock>
        <Title>About</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat.
        </Text>
      </AboutBlock>
      <Skills>
        <Title>Skills</Title>
        {/* <SkillsImage /> */}
      </Skills>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin: 0 60px;
  display: grid;
  grid-template-columns: var(--grid-columns);
`;

const AboutBlock = styled.div`
  grid-column: 1 / 3;
`;
const Title = styled(sectionTitle)``;
const Text = styled(paragraph)``;
const Skills = styled.div`
  grid-column: 5 / 7;
`;
