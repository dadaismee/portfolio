import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { styled } from 'styled-components';
import { Card } from '../components/index';

const Cards = ({ filter }) => {
  const query = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          frontmatter {
            description
            tags
            title
            url
            image {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  `);
  const { nodes } = query.allProjectsJson;
  const cards = nodes
    .filter((card) => {
      const { tags } = card.frontmatter;
      return filter !== 'All' ? tags.includes(filter) : tags;
    })
    .map((card, index) => {
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
          filter={filter}
        />
      );
    });

  return <CardsWrapper>{cards}</CardsWrapper>;
};

export default Cards;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: 1.38vw; //20px;
  overflow-x: auto;
  padding: 10px 0 20px 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
