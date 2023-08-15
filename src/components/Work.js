import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Cards, Tags } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';
import { sectionTitle } from '../styles/TextStyles';

const Work = () => {
  const [activeTag, setActiveTag] = useState('All');
  // const [isClicked, setIsClicked] = useState(false);

  const selectTag = (e, tag) => {
    e.preventDefault();
    setActiveTag(tag);
    // setIsClicked(!isClicked);
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
      <SectionTitle>Work</SectionTitle>
      <Tags
        activeTag={activeTag}
        handleClick={selectTag}
        // isClicked={isClicked}
      />
      <Cards filter={activeTag} />
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled(motion.div)`
  margin: 0px;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

const SectionTitle = styled(sectionTitle)`
  /* margin-bottom: 40px; */
  margin: 0 60px 40px;
`;
