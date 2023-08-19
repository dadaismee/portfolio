import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { mediaQueries } from './GlobalStyles';

export const h1 = styled(motion.h1)`
  color: var(--color-text);
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 72px */
  margin: 0;

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 36px;
  }
`;

export const h2 = styled(motion.h2)`
  color: var(--color-text);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 48px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 30px;
  }
`;

export const sectionTitle = styled.h3`
  color: var(--color-text);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
  margin: 0;
  /* margin-bottom: 20px; */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
  }
`;

export const logoAndCardTitles = styled.h4`
  color: var(--color-text);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
`;

export const menuAndTags = styled.button`
  color: var(--color-text);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  border: none;
  background-color: transparent;
  text-align: left;
`;

export const paragraph = styled.p`
  color: var(--color-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 23.2px */
`;

export const cardTags = styled.p`
  color: var(--color-text);
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 13px */
`;
