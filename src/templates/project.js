import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'styled-components';
import { h2, paragraph, sectionTitle } from '../styles/TextStyles';
import { Layout } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const project = ({ data }) => {
  // Data from a prject JSON
  const { links, tools, task, whyExists, metaphor } =
    data.projectsJson.projectData;
  const { title, url, image, description, tags } =
    data.projectsJson.frontmatter;
  const img = getImage(image);
  const tagsBlock = tags.map((tag, index) => <Text key={index}>{tag}</Text>);
  const linksBlock = links.prod.map((link, index) => (
    <a key={index} href={link}>
      🔗
    </a>
  ));
  const toolsBlock = tools.map((tool, index) => {
    const img = getImage(tool.icon);
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Icon image={img} />
        <Text key={index}>{tool.title}</Text>
      </div>
    );
  });
  // const processBlock = process.map((step, index) => (

  // ))

  // Rendered component
  return (
    <Layout>
      <Wrapper>
        <Title>
          <b>{title}</b> — {description}
          {Boolean(links) && (
            <div style={{ display: 'inline' }}>{linksBlock}</div>
          )}
        </Title>
        <FrontmatterWrapper>
          <GridContainer>
            <TextSection>
              <SectionTitle>My role</SectionTitle>
              <Tags>{tagsBlock}</Tags>
            </TextSection>
            <TextSection>
              <SectionTitle>Tools</SectionTitle>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                {toolsBlock}
              </div>
            </TextSection>
            <TextSection column='5 / 7'>
              <SectionTitle>Task</SectionTitle>
              <Text>{task}</Text>
            </TextSection>
          </GridContainer>
          <CoverImage image={img} alt={title} />
        </FrontmatterWrapper>
        <GridContainer>
          <TextSection column='1 / 3'>
            <SectionTitle>Why it exists</SectionTitle>
            <Text>{whyExists}</Text>
          </TextSection>
          <TextSection column='5 / 7'>
            <SectionTitle>Metaphor</SectionTitle>
            <Text>{metaphor}</Text>
          </TextSection>
        </GridContainer>
        {/* <TextSection>
          <SectionTitle>Process</SectionTitle>
          {processBlock}
        </TextSection> */}
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </Wrapper>
    </Layout>
  );
};

export default project;

const Wrapper = styled.div`
  margin: 0 60px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  * {
    margin: 0px;
  }
`;

const Title = styled(h2)`
  font-weight: 400;
`;

const FrontmatterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);

  * {
    width: var(--card-width);
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: ${({ column }) => column};
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled(GatsbyImage)`
  max-width: 25px;
  max-height: 25px;
`;

const Motivation = styled.div`
  grid-column: 1 / 3;
`;
const SectionTitle = styled(sectionTitle)``;
const Text = styled(paragraph)``;
const CoverImage = styled(GatsbyImage)`
  border-radius: var(--border-radius-ext);
  height: 100%;
`;

export const query = graphql`
  query ProjectQuery($url: String) {
    projectsJson(frontmatter: { url: { eq: $url } }) {
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
      projectData {
        metaphor
        task
        whyExists
        links {
          github
          prod
        }
        tools {
          title
          icon {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
`;
