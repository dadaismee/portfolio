import React from 'react';
import { styled } from 'styled-components';
import { sectionTitle } from '../styles/TextStyles';
import { Tags } from '../components/index';

const Work = () => {
  return (
    <Wrapper>
      <SectionTitle>Work</SectionTitle>
      <Tags />
      {/* <Cards /> */}
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.div`
  margin: 0 60px;
  background-color: #fff;
`;

const SectionTitle = styled(sectionTitle)``;
