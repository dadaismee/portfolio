import React from 'react';
import { styled } from 'styled-components';
import { menuAndTags } from '../styles/TextStyles';

const Tags = ({ activeTag, handleClick }) => {
  return (
    <Wrapper>
      {tagsData.map((tag, index) => (
        <Tag
          key={index}
          active={activeTag === tag}
          onClick={(e) => handleClick(e, tag)}
          // variants={tagVariants}
          // initial='unclicked'
          // animate={isClicked ? 'clicked' : 'unclicked'}
        >
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
  'UX/UI',
  'Branding',
  'WebDev',
  '3D',
  'Art',
];

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin: 0 60px;
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

// const tagVariants = {
//   unclicked: {
//     padding: '10px 0px',
//     border: 'none',
//     color: 'var(--color-disabled)',
//   },
//   clicked: {
//     padding: '10px 20px',
//     border: 'solid 1px',
//     borderRadius: '5px',
//     color: 'var(--color-text)',
//   },
// };
