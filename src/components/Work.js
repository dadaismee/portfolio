import React, { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { sectionTitle } from '../styles/TextStyles';
import { Tags, Cards } from '../components/index';

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
      viewport={{ once: true }}
    >
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
`;

const SectionTitle = styled(sectionTitle)`
  /* margin-bottom: 40px; */
  margin: 0 60px 40px;
`;
