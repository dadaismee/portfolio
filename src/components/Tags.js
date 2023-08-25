import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { menuAndTags } from '../styles/TextStyles';

const Tags = ({ activeTag, handleClick }) => {
  return (
    <Wrapper>
      {tagsData.map((tag, index) => (
        <Tag
          key={index}
          active={activeTag === tag}
          onClick={(e) => handleClick(e, tag)}>
          {tag}
        </Tag>
      ))}
    </Wrapper>
  );
};

export default Tags;

export const tagsData = [
  'All',
  'PM/LX',
  'Service',
  'UX/UI',
  'Branding',
  'WebDev',
  'Art',
];

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin: 0 60px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

const Tag = styled(menuAndTags)`
  background-color: transparent;
  color: var(--color-disabled);
  transition: var(--transition);
  box-sizing: border-box;
  cursor: pointer;
  ${({ active }) =>
    active
      ? 'padding: 10px 20px; border: solid 1px var(--color-text); border-radius: 5px; color: var(--color-text);'
      : 'padding: 10px 0px; border: solid 1px transparent'}

  &:hover {
    color: var(--color-text);
  }
`;
