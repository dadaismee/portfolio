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
      <TitleWrapper>
        <SectionTitle>Work</SectionTitle>
        <FilterButton>Filter</FilterButton>
      </TitleWrapper>
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
  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 40px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin: 0 60px 40px;

  @media (max-width: ${mediaQueries.phone}) {
    margin: 20px;
  }
`;

const SectionTitle = styled(sectionTitle)``;

const FilterButton = styled(sectionTitle)`
  display: none;

  @media (max-width: ${mediaQueries.phone}) {
    display: inline-flex;
    border: 1px solid var(--color-text);
    border-radius: 15px;
    padding: 10px 20px;
  }
`;
