import React from 'react';
import { Link } from 'gatsby';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { cardTags, logoAndCardTitles, paragraph } from '../styles/TextStyles';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ image, title, description, tags, index, to }) => {
  const cardTags = tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);
  return (
    // <Link to={to}>
    <Wrapper
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: [0.165, 0.84, 0.44, 1],
        duration: 2,
        delay: 1 + index * 0.15,
      }}
      viewport={{ once: true }}
      transformTemplate={({ y }) => `translateY(-${y}px)`}
    >
      <Image image={image} alt={title} />
      <Title>{title}</Title>
      <Description>
        {description[0].toUpperCase() + description.slice(1)}
      </Description>
      <TagsWrapper>{cardTags}</TagsWrapper>
      <Link to={to}>
        <Button>Explore</Button>
      </Link>
    </Wrapper>
    // </Link>
  );
};

export default Card;

const Wrapper = styled(motion.div)`
  display: grid;
  box-sizing: border-box;
  width: var(--card-width);
  max-width: var(--card-max-width);
  padding: 20px;
  gap: 20px;

  border-radius: 25px;
  border: 1px solid var(--color-text);
  transition: var(--transition);

  &:hover {
    background: var(--color-accent);
    box-shadow: var(--main-shadow);
    transform: translateY(-10px);
  }

  * {
    margin: 0;
  }
`;

const Image = styled(GatsbyImage)`
  height: 100%;
  min-height: 19.9vh;
  border-radius: 15px;
  border: 1px solid var(--color-text);
`;

const Title = styled(logoAndCardTitles)``;

const Description = styled(paragraph)``;

const TagsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled(cardTags)`
  padding: 10px 20px;
  border: solid 1px;
  border-radius: 5px;
  color: var(--color-disabled);
  transition: var(--transition);

  ${Wrapper}:hover & {
    color: var(--color-text);
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
`;
