import React from 'react';
import { styled } from 'styled-components';
import { sectionTitle } from '../styles/TextStyles';
import { Tags, Cards } from '../components/index';

const Work = () => {
  return (
    <Wrapper>
      <SectionTitle>Work</SectionTitle>
      <Tags />
      <Cards />
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.div`
  margin: 0px;
`;

const SectionTitle = styled(sectionTitle)`
  /* margin-bottom: 40px; */
  margin: 0 60px 40px;
`;
