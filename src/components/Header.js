import { useLocation } from '@reach/router';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';

const Header = ({ type, pages, url }) => {
  const location = useLocation();
  const sectionLinks = [
    { name: 'Work', url: `/#work` },
    { name: 'About', url: `/#about` },
    { name: 'Contact', url: `${location.pathname}#contact` },
  ];
  return (
    <Wrapper
      initial={{
        opacity: 0,
        y: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}>
      <Link to='/'>
        <Logo>
          <p>
            V-<span>{createLogo()}</span>-S
          </p>
        </Logo>
      </Link>
      {type === 'menu' ? (
        <Navbar>
          <ul>
            {sectionLinks.map((link) => (
              <li>
                <AnchorLink key={link.name} to={link.url}>
                  {link.name}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </Navbar>
      ) : (
        <FlexContainer>
          {Boolean(pages[pages.indexOf(url) - 1]) && (
            <Flex>
              <Button>←</Button>
              <p>back</p>
            </Flex>
          )}
          <Flex>
            <Button>C</Button>
            <p>contact</p>
          </Flex>
          {Boolean(pages[pages.indexOf(url) + 1]) && (
            <Flex>
              <Button>→</Button>
              <p>next</p>
            </Flex>
          )}
        </FlexContainer>
      )}
    </Wrapper>
  );
};

export default Header;

export const createLogo = () => {
  const logos = [
    '(˵ ͡° ͜ʖ ͡°˵)',
    '❤',
    '_',
    '(꒡⌓꒡)',
    '	(｡◕‿‿◕｡)',
    '(⌐■_■)',
    '↑',
    '©',
    '/( ﾟヮﾟ)/',
    '☯',
  ];
  return logos[Math.floor(Math.random() * logos.length)];
};

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin: 20px 60px 40px 60px;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
    margin: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  gap: 10px;

  p {
    color: #211414;
    font-family: Space Grotesk;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 24px */
    transition: var(--transition);

    span {
      color: var(--color-button-hover);
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

const Navbar = styled.nav`
  ul {
    display: flex;
    gap: 40px;

    li {
      color: #211414;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 20px */
      transition: var(--transition);

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

const Button = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  padding: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: var(--color-disabled);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Space Grotesk';
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 20px;

  p {
    font-size: 12px;
    font-weight: bold;
    margin: 0px;
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
