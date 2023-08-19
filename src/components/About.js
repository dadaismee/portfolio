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
          Hi there! I design and develop websites and manage educational
          products. I leverage my blend of experise in education, product
          management, design and generative art to ship thoughtful, conceptual
          and modern products. In my spare time, I juggle doing a PhD in
          philosophy of science and hanging out with my family.
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
  display: flex;
  flex-direction: column;
  gap: 20px;

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
    title: 'LX Design / Product Management',
    level: 90,
  },
  {
    title: 'UX/UI Design',
    level: 75,
  },
  {
    title: 'Web Development',
    level: 70,
  },
  {
    title: 'Brand Design',
    level: 60,
  },
  {
    title: 'Creative Coding',
    level: 65,
  },
  {
    title: '3D (Blender)',
    level: 55,
  },
];
