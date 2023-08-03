import React from 'react';
import { styled } from 'styled-components';
import { Card } from '../components/index';

const Cards = () => {
  const cards = cardData.map((card, index) => {
    return (
      <Card
        key={index}
        index={index}
        image={card.image}
        title={card.title}
        description={card.description}
        tags={card.tags}
      />
    );
  });

  return <Wrapper>{cards}</Wrapper>;
};

export default Cards;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0 20px 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const cardData = [
  {
    image: '/src/static/poster.png',
    title: 'Konspekt',
    description:
      'A website for my startup for streamlined academic writing tools.',
    tags: ['Branding', 'UX/UI', 'WebDev'],
  },
  {
    image: 'images/poster.png',
    title: 'Undulation',
    description: 'A landing page for a Hungarian ambient music label.',
    tags: ['Branding', 'UX/UI'],
  },
  {
    title: 'Undulation',
    description: 'A landing page for a Hungarian ambient music label.',
    tags: ['Branding', 'UX/UI'],
  },
  {
    title: 'Undulation',
    description: 'A landing page for a Hungarian ambient music label.',
    tags: ['Branding', 'UX/UI'],
  },
  {
    title: 'Undulation',
    description: 'A landing page for a Hungarian ambient music label.',
    tags: ['Branding', 'UX/UI'],
  },
  {
    title: 'Undulation',
    description: 'A landing page for a Hungarian ambient music label.',
    tags: ['Branding', 'UX/UI'],
  },
  {
    title: 'Undulation',
    description: 'A landing page for a Hungarian ambient music label.',
    tags: ['Branding', 'UX/UI'],
  },
];
