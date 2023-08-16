import React from 'react';
import { styled } from 'styled-components';
import { Skill } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';
import { paragraph, sectionTitle } from '../styles/TextStyles';

const About = () => {
  const skillsMap = skills.map((skill, index) => (
    <Skill key={index} index={index} title={skill.title} level={skill.level} />
  ));

  return (
    <Wrapper id='about'>
      <AboutBlock>
        <Title>About</Title>
        <Text>
          Valerii Shevchenko designs and develops websites and apps and manages
          educational products about programming (mostly courses) at Practicum.
          He leverages his unique blend of experise in education, product
          management, generative art and design to ship thoughtful, conceptual
          and modern products.
        </Text>
      </AboutBlock>
      <SkillsBlock>
        <Title>Skills</Title>
        <Skills>{skillsMap}</Skills>
      </SkillsBlock>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin: 0 60px;
  display: grid;
  grid-template-columns: var(--grid-columns);

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
    display: block;
  }
`;

const AboutBlock = styled.div`
  grid-column: 1 / 3;

  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 20px;
  }
`;
const Title = styled(sectionTitle)``;
const Text = styled(paragraph)``;

const SkillsBlock = styled.div`
  grid-column: 5 / 7;
  padding-left: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    padding-left: 0px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const skills = [
  {
    title: 'LX design / Production',
    level: 90,
  },
  {
    title: 'Product Management',
    level: 75,
  },
  {
    title: 'UX/UI Design',
    level: 70,
  },
  {
    title: 'Brand Design',
    level: 65,
  },
  {
    title: 'Web Development',
    level: 60,
  },
  {
    title: 'Creative Coding',
    level: 55,
  },
  {
    title: '3D (Blender)',
    level: 55,
  },
];
