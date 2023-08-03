import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'gatsby';
import { h1 } from '../styles/TextStyles';

const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <Logo>
          <p>V--S</p>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 60px 40px 60px;
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
