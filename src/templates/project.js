import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'styled-components';
import { h2, sectionTitle } from '../styles/TextStyles';
import { Layout } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const project = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, url, image, description, tags } =
    data.markdownRemark.frontmatter;
  const img = getImage(image);

  return (
    <Layout>
      <Wrapper>
        <Title>{description}</Title>
        <CoverImage image={img} alt={title} />
        <MyRole>{tags}</MyRole>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Layout>
  );
};

export default project;

const Wrapper = styled.div``;
const Title = styled(h2)``;
const MyRole = styled(sectionTitle)``;
const CoverImage = styled(GatsbyImage)``;

export const query = graphql`
  query ProjectQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        description
        url
        tags
        image {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;
