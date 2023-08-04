import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'styled-components';
import { h2, paragraph, sectionTitle } from '../styles/TextStyles';
import { Layout } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Arrow from '../images/icons/Arrow.svg';

const project = ({ data }) => {
  // Data from a prject JSON
  const { links, tools, task, whyExists, metaphor, process, results } =
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
      <div key={index} style={{ display: 'flex', gap: '10px' }}>
        <Icon image={img} />
        <Text>{tool.title}</Text>
      </div>
    );
  });
  const processBlock = process.map((step, index) => {
    const img = getImage(step.image);
    return (
      <ProcessStep
        key={index}
        title={step.title}
        image={img}
        caption={step.caption}
        isDone={step.isDone}
      />
    );
  });

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
          <Image image={img} alt={title} />
        </FrontmatterWrapper>
        <GridContainer>
          <TextSection column='1 / 3'>
            <SectionTitle>Why it exists</SectionTitle>
            <Text>{whyExists}</Text>
          </TextSection>
          {Boolean(metaphor) && (
            <TextSection column='5 / 7'>
              <SectionTitle>Metaphor</SectionTitle>
              <Text>{metaphor}</Text>
            </TextSection>
          )}
        </GridContainer>
        <TextSection>
          <SectionTitle>Process</SectionTitle>
          <Process>{processBlock}</Process>
        </TextSection>
        {Boolean(results) && (
          <TextSection>
            <SectionTitle>Results</SectionTitle>
            <Text>{results}</Text>
          </TextSection>
        )}
      </Wrapper>
    </Layout>
  );
};

export default project;

const ProcessStep = ({ title, image, caption, isDone }) => (
  <ProcessStepWrapper isDone={isDone}>
    <ProcessStepTitle>{title}</ProcessStepTitle>
    {/* <img src={Arrow} /> */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: image.backgroundColor,
        height: '100%',
        borderRadius: 'var(--border-radius-ext)',
      }}
    >
      <Image image={image} style={{ maxWidth: 'var(--card-width)' }} />
    </div>
    {Boolean(caption) && <ProcessStepCaption>{caption}</ProcessStepCaption>}
  </ProcessStepWrapper>
);

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

const Process = styled.div`
  display: flex;
  gap: 20px;
`;

const ProcessStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  opacity: ${({ isDone }) => (isDone ? '1' : '0.5')};
`;

const ProcessStepTitle = styled(sectionTitle)`
  padding: 20px 0;
  width: 100%;
  border: solid 1px var(--color-text);
  border-radius: var(--border-radius-ext);
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;

const ProcessStepCaption = styled(paragraph)`
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 25px */
  padding: 0px 10px;
  width: 100%;
`;

const SectionTitle = styled(sectionTitle)``;
const Text = styled(paragraph)``;

const Image = styled(GatsbyImage)`
  border-radius: var(--border-radius-ext);
  height: max-content;
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
        task
        metaphor
        whyExists
        process {
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          caption
          isDone
        }
        results
      }
    }
  }
`;
