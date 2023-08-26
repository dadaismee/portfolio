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
      <AboutBlock column='1 / 3'>
        <Title>About</Title>
        <Text>
          Hi there! I'm Valerii Shevchenko, a passionate design generalist and
          experienced product manager. I specialize in bridging the gap between
          design consultancy and hands-on creation, ensuring a holistic approach
          that drives ownership and innovation. My expertise in education,
          product management, design, and generative art allows me to deliver
          thoughtful and modern products. When I'm not immersed in design, I'm
          pursuing a PhD in philosophy of science and spending quality time with
          my family.
        </Text>
      </AboutBlock>
      {/* <AboutBlock column='5 / 7'>
        <Title>Services</Title>
        <Text>
          <ul>
            <li>
              <strong>Product & Service Design</strong> — conceptualizing and
              developing innovative products and services
            </li>
            <li>
              <strong>UX/UI Design and WebDev</strong> — creating intuitive and
              engaging user experiences that drive results
            </li>
            <li>
              <strong>Branding</strong> — crafting compelling brand identities
              that resonate with your audience
            </li>
            <li>
              <strong>3D Design</strong> — transforming ideas into striking
              three-dimensional visuals
            </li>
          </ul>
        </Text>
      </AboutBlock> */}
      <SkillsBlock>
        <Title>Skills</Title>
        <Skills>{skillsMap}</Skills>
      </SkillsBlock>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin: 60px 60px 0;
  display: grid;
  grid-template-columns: var(--grid-columns);

  /* display: flex; */

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const AboutBlock = styled.div`
  grid-column: ${({ column }) => column};
  width: var(--card-width);

  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 20px;
    width: auto;
  }
`;
const Title = styled(sectionTitle)``;
const Text = styled(paragraph)`
  ul {
    margin: 0 -20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    list-style: disc;
  }
`;

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
    title: 'Service Design',
    level: 65,
  },
  {
    title: 'Brand Design',
    level: 65,
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
