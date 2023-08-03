import React from 'react';
import { styled } from 'styled-components';
import { paragraph, sectionTitle } from '../styles/TextStyles';
import { Skill } from '../components/index';

const About = () => {
  const skillsMap = skills.map((skill, index) => (
    <Skill key={index} title={skill.title} level={skill.level} />
  ));

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
`;

const AboutBlock = styled.div`
  grid-column: 1 / 3;
`;
const Title = styled(sectionTitle)``;
const Text = styled(paragraph)``;

const SkillsBlock = styled.div`
  grid-column: 5 / 7;
  padding-left: 20px;
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
