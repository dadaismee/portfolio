import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { cardTags, logoAndCardTitles, paragraph } from '../styles/TextStyles';

const Card = ({ image, title, description, tags, index, to, ongoing }) => {
  const cardTags = tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);
  return (
    <Link to={to}>
      <Wrapper
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          ease: [0.165, 0.84, 0.44, 1],
          duration: 1,
          delay: 0.5 + index * 0.15,
        }}
        viewport={{ once: true }}
        whileTap={hoverStyles.on}
        transformTemplate={({ y }) => `translateY(-${y}px)`}>
        {Boolean(ongoing) && <Badge>ONGOING</Badge>}
        <Image image={image} alt={title} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Title>{title}</Title>
            <Description>
              {description[0].toUpperCase() + description.slice(1)}
            </Description>
          </div>
          <TagsWrapper>{cardTags}</TagsWrapper>
        </div>
        {/* <Link to={to}> */}
        <Button>Explore</Button>
        {/* </Link> */}
      </Wrapper>
    </Link>
  );
};

export default Card;

const hoverStyles = {
  on: {
    boxShadow: 'var(--main-shadow)',
    transition: { duration: 0.25 },
    delay: 0.5,
  },
  off: {
    background: 'transparent',
    boxShadow: 'none',
    transform: 'none',
  },
};

const Wrapper = styled(motion.div)`
  display: grid;
  position: relative;
  box-sizing: border-box;
  width: var(--card-width);
  min-height: calc(var(--card-max-width) * 1.35);
  height: auto;
  padding: 1.38vw; // 20px;
  gap: 1.38vw; //20px;

  border-radius: 25px;
  border: 1px solid var(--color-text);
  transition: var(--transition);

  &:hover {
    background: var(--color-accent);
    box-shadow: var(--main-shadow);
    transform: translateY(-10px);
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: ${mediaQueries.phone}) {
    padding: 20px;
    gap: 20px;
    width: 70vw;
    min-height: calc(var(--card-max-width) * 1);
  }
`;

const Badge = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: auto;
  padding: 10px;
  color: var(--color-main);
  background-color: var(--color-text);
  border-radius: 15px;
  text-align: center;
  z-index: 1;
  font-size: 13px;
`;

const Image = styled(GatsbyImage)`
  height: 22.5vh;
  border-radius: 15px;
  object-fit: fill;
  border: 1px solid var(--color-text);

  @media (max-width: ${mediaQueries.phone}) {
    height: 19vh;
    min-height: auto;
  }
`;

const Title = styled(logoAndCardTitles)``;

const Description = styled(paragraph)`
  @media (max-width: ${mediaQueries.phone}) {
    /* display: none; */
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled(cardTags)`
  align-self: center;
  padding: 10px;
  border: solid 1px;
  border-radius: 5px;
  color: var(--color-disabled);
  transition: var(--transition);

  ${Wrapper}:hover & {
    color: var(--color-text);
  }

  @media (max-width: ${mediaQueries.phone}) {
    color: var(--color-text);
    padding: 10px;
  }
`;

const Button = styled(motion.button)`
  display: flex;
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  border-radius: 15px;
  border: 1px solid #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  background: var(--color-main);
  transition: var(--transition);
  transition-delay: 0.125s;

  ${Wrapper}:hover & {
    background: var(--color-button-hover);
    color: var(--color-main);
    cursor: pointer;
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
    height: 48px;
  }
`;
