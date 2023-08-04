import React from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const Header = () => {
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
  const logo = logos[Math.floor(Math.random() * logos.length)];
  return (
    <Wrapper
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link to='/'>
        <Logo>
          <p>
            V-<span>{logo}</span>-S
          </p>
        </Logo>
      </Link>
      <Navbar>
        <ul>
          <li>
            <Link to='/work'>Work</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </Navbar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin: 0px 60px 40px 60px;
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
`;
