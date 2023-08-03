import React from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { cardTags, logoAndCardTitles, paragraph } from '../styles/TextStyles';

const Card = ({ image, title, description, tags, index }) => {
  const cardTags = tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);
  return (
    <Wrapper
      initial={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        ease: [0.165, 0.84, 0.44, 1],
        duration: 2,
        delay: 0.5 + index * 0.15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transformTemplate={({ y }) => `translateY(-${y}px)`}
    >
      <Image src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TagsWrapper>{cardTags}</TagsWrapper>
      <Button>Explore</Button>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled(motion.div)`
  display: grid;
  box-sizing: border-box;
  width: var(--card-width);
  /* max-width: var(--card-max-width); */
  padding: 20px;
  margin: 0px;

  border-radius: 25px;
  border: 1px solid var(--color-text);
  transition: var(--transition);

  &:hover {
    background: var(--color-accent);
    box-shadow: var(--main-shadow);
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  max-height: 215px;
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
`;

const Button = styled.button`
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 15px;
  border: 1px solid #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  background: var(--color-main);
  transition: var(--transition);

  ${Wrapper}:hover & {
    background: var(--color-button-hover);
    color: var(--color-main);
    cursor: pointer;
  }
`;
