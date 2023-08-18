import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';
import { Card } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';

const Cards = ({ filter }) => {
  const query = useStaticQuery(graphql`
    query {
      allProjectsJson(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            description
            tags
            date
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
  display: flex;
  /* grid-template-columns: var(--grid-columns); */
  gap: 1.38vw; //20px;
  overflow-x: scroll;
  padding: 10px 60px 20px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mediaQueries.phone}) {
    padding: 10px 20px 10px 20px;
    gap: 20px;
  }
`;
