import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { menuAndTags } from '../styles/TextStyles';
import { graphql, useStaticQuery } from 'gatsby';

const Tags = () => {
  const [activeTag, setActiveTag] = useState(true);
  const [tagFilter, setTagFilter] = useState(null);

  const handleClick = (tag) => {
    setActiveTag(tag);
    setTagFilter(tag);
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
  margin: 0 60px;
`;

const Tag = styled(menuAndTags)`
  background-color: transparent;
  color: var(--color-disabled);
  transition: var(--transition);
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  ${({ active }) =>
    active
      ? 'padding: 10px 20px; border: solid 1px; border-radius: 5px; color: var(--color-text);'
      : 'padding: 10px 0px; border: none'}

  &:hover {
    color: var(--color-text);
  }
`;

// export const query = graphql`
//   query TagQuery($tag: String) {
//     allProjectsJson(frontmatter: { tags: { eq: $tag } }) {
//       nodes {
//         frontmatter {
//           tag
//         }
//       }
//     }
//   }
// `;
