import React, { useState } from 'react';
import { styled } from 'styled-components';
import { menuAndTags } from '../styles/TextStyles';

const Tags = () => {
  const [activeTag, setActiveTag] = useState(true);

  const handleClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <Wrapper>
      {tagsData.map((tag, index) => (
        <Tag
          key={index}
          active={tag === activeTag}
          onClick={() => handleClick(tag)}
        >
          {tag.title}
        </Tag>
      ))}
      ;
    </Wrapper>
  );
};

export default Tags;

const tagsData = [
  { title: 'All' },
  { title: 'PM/LX' },
  { title: 'UX/UI' },
  { title: 'Branding' },
  { title: 'WebDev' },
  { title: '3D' },
  { title: 'Art' },
];

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const Tag = styled(menuAndTags)`
  background-color: transparent;
  color: var(--color-disabled);
  transition: var(--transition);
  cursor: pointer;
  border: none;
  transition: var(--transition);
  ${({ active }) =>
    active
      ? 'padding: 10px 20px; border: solid 1px; border-radius: 5px; color: var(--color-text);'
      : 'padding: 10px 0px; border: none'}

  &:hover {
    color: var(--color-text);
  }
`;
