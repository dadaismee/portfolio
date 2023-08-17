import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Cards, Tags } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';
import { sectionTitle } from '../styles/TextStyles';

const Work = () => {
  const [activeTag, setActiveTag] = useState('All');

  const selectTag = (e, tag) => {
    e.preventDefault();
    setActiveTag(tag);
  };

  return (
    <Wrapper
      id='work'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{ once: true }}>
      <TitleWrapper>
        <SectionTitle>Work</SectionTitle>
      </TitleWrapper>
      <Tags activeTag={activeTag} handleClick={selectTag} />
      <Cards filter={activeTag} />
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled(motion.div)`
  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 40px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px 20px;

  @media (max-width: ${mediaQueries.phone}) {
    margin: 0 0 0 20px;
  }
`;

const SectionTitle = styled(sectionTitle)`
  margin: 0;
`;
