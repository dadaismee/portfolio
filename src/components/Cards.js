import React from 'react';
import { styled } from 'styled-components';
import { Card } from '../components/index';

const Cards = () => {
  const cards = cardData.map((card, index) => {
    const gridColumn = `${2 * index + 1} / ${2 * index + 3}`;
    console.log(gridColumn);

    return (
      <Card
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
        tags={card.tags}
        grid={gridColumn}
      />
    );
  });

  // console.log(cards);

  return <Wrapper>{cards}</Wrapper>;
};

export default Cards;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
  grid-auto-columns: minmax(0, 1fr);
  gap: 20px;
  padding-top: 10px;
  overflow-y: hidden;

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
];
