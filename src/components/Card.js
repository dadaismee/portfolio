import React from 'react';
import { styled } from 'styled-components';
import { cardTags, logoAndCardTitles, paragraph } from '../styles/TextStyles';

const Card = ({ image, title, description, tags, grid }) => {
  const cardTags = tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);
  return (
    <Wrapper grid={grid}>
      <Image src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TagsWrapper>{cardTags}</TagsWrapper>
      <Button>Explore</Button>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 25.19vw; //362.8px
  max-width: 362.8px;
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
  /* height: 215px; */
  /* align-self: stretch; */
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
