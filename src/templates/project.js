import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { styled } from 'styled-components';
import { Contact, Layout, SEO } from '../components';
import Arrow from '../images/icons/Arrow.svg';
import { mediaQueries } from '../styles/GlobalStyles';
import { h2, paragraph, sectionTitle } from '../styles/TextStyles';

const Project = ({ data }) => {
  // Data from a prject JSON
  const { links, tools, task, whyExists, metaphor, process, details, results } =
    data.projectsJson.projectData;
  const { title, url, image, description, tags } =
    data.projectsJson.frontmatter;
  const img = getImage(image);
  const tagsBlock = tags.map((tag, index) => <Text key={index}>{tag}</Text>);
  const linksBlock = links.prod.map((link, index) => {
    return (
      <a key={index} href={link} target='_blank'>
        🔗
      </a>
    );
  });
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
      <>
        <ProcessStep
          key={index}
          title={step.title}
          image={img}
          caption={step.caption}
          isDone={step.isDone}
        />
        {index !== process.length - 1 && (
          <img
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginTop: '20px',
            }}
            src={Arrow}
          />
        )}
      </>
    );
  });

  // Navigation between projects on keyboard
  const pages = data.allProjectsJson.nodes.map((project) => {
    const { url } = project.frontmatter;
    return url;
  });

  const handleKeyUp = (e) => {
    if (e.keyCode === 39 && Boolean(pages[pages.indexOf(url) + 1])) {
      navigate(`/${pages[pages.indexOf(url) + 1]}`);
    }
    if (e.keyCode === 37 && Boolean(pages[pages.indexOf(url) - 1])) {
      navigate(`/${pages[pages.indexOf(url) - 1]}`);
    }
    if (e.keyCode === 67) {
      navigate(
        `mailto:valerii.s.shevchenko@gmail.com?subject=PROJECT INQUIRY&body=Hi, Valerii! %0D%0A %0D%0A I have a project in mind. Here are the details. %0D%0A %0D%0A Task: %0D%0A %0D%0A Context: %0D%0A %0D%0A Budget: %0D%0A %0D%0A Desirable deadline: %0D%0A %0D%0A …`
      );
    }
  };

  useEffect(() => {
    window.document.addEventListener('keyup', handleKeyUp);

    return () => {
      window.document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Rendered component
  return (
    <Layout type='buttons' pages={pages} url={url}>
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
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                }}>
                {toolsBlock}
              </div>
            </TextSection>
            <TextSection column='5 / 7'>
              <SectionTitle>Task</SectionTitle>
              <Text>{task}</Text>
            </TextSection>
          </GridContainer>
          <Zoom>
            <Image image={img} alt={title} />
          </Zoom>
        </FrontmatterWrapper>
        <GridContainer>
          <TextSection column='1 / 3'>
            <SectionTitle>About</SectionTitle>
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

        {Boolean(details) &&
          details.map((detail, index) => {
            return (
              <TextSection key={index}>
                <SectionTitle>{detail.title}</SectionTitle>
                {Boolean(detail.iframes) && (
                  <FrontmatterWrapper style={{ gap: '20px' }}>
                    {Boolean(detail.text) && <Text>{detail.text}</Text>}
                    <GridContainer>
                      {detail.iframes.map((iframe, index) => {
                        let style =
                          detail.iframes.length >= 2
                            ? 'height: var(--card-width);  width: var(--card-width); border: solid 1px var(--color-text); border-radius: var(--border-radius-ext);'
                            : 'height: 100%; width: calc(var(--card-width) * 2 + 20px); border: none;';

                        return (
                          <FrontmatterWrapper
                            style={{
                              gap: '10px',
                            }}>
                            <Iframe
                              key={index}
                              src={iframe.src}
                              styles={style}
                              width={iframe.width}
                              height={iframe.height}
                              allowFullscreen={iframe.allowFullscreen}></Iframe>
                            <ProcessStepCaption>
                              {iframe.caption}
                            </ProcessStepCaption>
                          </FrontmatterWrapper>
                        );
                      })}
                    </GridContainer>
                  </FrontmatterWrapper>
                )}

                <ImageWrapper>
                  {Boolean(detail.images) &&
                    detail.images.map((image, index) => {
                      const img = getImage(image.image);
                      let imageWidth = 0;
                      {
                        {
                          detail.images.length < 2
                            ? (imageWidth = `calc(var(--card-width) * 2 + 20px)`)
                            : (imageWidth = `var(--card-max-width)`);
                        }
                      }
                      return (
                        <DetailImageWrapper imageWidth={imageWidth}>
                          <Zoom>
                            <Image
                              style={{ width: imageWidth }}
                              image={img}
                              key={index}
                              alt={image.title}
                            />
                          </Zoom>
                          {Boolean(image.caption) && (
                            <ProcessStepCaption>
                              {image.caption}
                            </ProcessStepCaption>
                          )}
                        </DetailImageWrapper>
                      );
                    })}
                </ImageWrapper>
              </TextSection>
            );
          })}

        {Boolean(results) && (
          <GridContainer>
            <TextSection column='1 / 3'>
              <SectionTitle>Results</SectionTitle>
              <Text>{results}</Text>
            </TextSection>
          </GridContainer>
        )}
      </Wrapper>
      <Contact id='#contact' />
    </Layout>
  );
};

export default Project;

const ProcessStep = ({ title, image, caption, isDone }) => (
  <ProcessStepWrapper isDone={isDone}>
    <ProcessStepTitle>{title}</ProcessStepTitle>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor:
          image.backgroundColor === '#080808'
            ? 'var(--color-main)'
            : image.backgroundColor,
        height: '100%',
        borderRadius: 'var(--border-radius-ext)',
      }}>
      <Zoom>
        <Image image={image} />
      </Zoom>
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

  @media (max-width: ${mediaQueries.phone}) {
    margin: 0;
    gap: 40px;
  }
`;

const Title = styled(h2)`
  font-weight: 400;

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
    padding-top: 40px;
  }
`;

const FrontmatterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

const GridContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: var(--grid-columns); */
  display: flex;
  gap: 20px;

  * {
    width: var(--card-width);
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    * {
      width: auto;
    }
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: ${({ column }) => column};

  @media (max-width: ${mediaQueries.phone}) {
    padding: var(--padding-mobile);
    gap: 10px;
  }
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
  gap: 5px;

  @media (max-width: ${mediaQueries.phone}) {
    overflow-x: scroll;
    margin: 0 -20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const ProcessStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: var(--card-width);
  opacity: ${({ isDone }) => (isDone ? '1' : '0.5')};

  @media (max-width: ${mediaQueries.phone}) {
    min-width: 300px;
    padding: 0 20px;
  }
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

const Iframe = styled.iframe`
  ${({ styles }) => styles};
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;

  @media (max-width: ${mediaQueries.phone}) {
    width: calc(100vw - 40px);
  }
`;

const SectionTitle = styled(sectionTitle)``;
const Text = styled(paragraph)`
  width: 'var(--card-width)';

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

const Image = styled(GatsbyImage)`
  border-radius: var(--border-radius-ext);

  @media (max-width: ${mediaQueries.phone}) {
    width: auto;
    /* height: 100%; */
    margin: var(--padding-mobile);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  margin: 0 -60px;
  padding: 0 60px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mediaQueries.phone}) {
    margin: 0 -20px 0 -40px;
    padding: 0 40px 0 20px;
  }
`;

const DetailImageWrapper = styled.div`
  width: ${({ imageWidth }) => imageWidth};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const query = graphql`
  query ProjectQuery($url: String) {
    projectsJson(frontmatter: { url: { eq: $url } }) {
      frontmatter {
        title
        description
        date
        tags
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
        details {
          title
          text
          iframes {
            src
            caption
            width
            height
            allowFullscreen
          }
          images {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
            caption
          }
        }
        results
      }
    }
    allProjectsJson(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
          url
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { title, description } = data.projectsJson.frontmatter;
  return <SEO title={title + ' | V--S project'} description={description} />;
};
