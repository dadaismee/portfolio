import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { styled } from 'styled-components';
import { Card } from '../components/index';

const Cards = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            id
            frontmatter {
              description
              tags
              url
              title
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
            }
          }
        }
      }
    `
  );

  const { nodes } = query.allMarkdownRemark;
  const cards = nodes.map((card, index) => {
    const { title, tags, description, url, image } = card.frontmatter;
    const img = getImage(image);
    return (
      <Card
        key={index}
        index={index}
        to={`/${url}`}
        image={img}
        title={title}
        description={description}
        tags={tags}
      />
    );
  });

  return <Wrapper>{cards}</Wrapper>;
};

export default Cards;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0 20px 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
