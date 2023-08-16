import React from 'react';
import { styled } from 'styled-components';
import mail from '../images/icons/email.svg';
import telegram from '../images/icons/telegram.svg';
import { mediaQueries } from '../styles/GlobalStyles';
import { menuAndTags, sectionTitle } from '../styles/TextStyles';

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <Title>Contact</Title>
      <ContentWrapper>
        <ButtonBlock>
          <BlockTitle>Send an email</BlockTitle>
          <a
            href='mailto:valerii.s.shevchenko@gmail.com?subject=PROJECT INQUIRY&body=Hi, Valerii! %0D%0A %0D%0A I have a project in mind. Here are the details. %0D%0A %0D%0A Task: %0D%0A %0D%0A Context: %0D%0A %0D%0A Budget: %0D%0A %0D%0A Desirable deadline: %0D%0A %0D%0A …'
            target='_blank'>
            <Button>
              <img src={mail} />
            </Button>
          </a>
        </ButtonBlock>
        <ButtonBlock>
          <BlockTitle>Write in Telegram</BlockTitle>
          <a href='https://t.me/emsiadad' target='_blank'>
            <Button>
              <img src={telegram} />
            </Button>
          </a>
        </ButtonBlock>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  margin: 0 60px;

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
  }
`;

const Title = styled(sectionTitle)``;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: var(--card-width);
  height: var(--card-width);
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

const BlockTitle = styled(menuAndTags)`
  border: none;
  background-color: transparent;
  text-align: left;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;
const Button = styled.button`
  border: solid 1px var(--color-text);
  background-color: transparent;
  border-radius: var(--border-radius-ext);
  height: var(--card-width);
  width: var(--card-width);
  padding: 0 20px;
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--main-shadow);
    background-color: var(--color-button-hover);
    cursor: pointer;
  }

  &:active {
    transform: translateY(-10px);
    box-shadow: var(--main-shadow);
    background-color: var(--color-button-hover);
  }

  img {
    height: calc(var(--card-width) / 4);
    width: calc(var(--card-width) / 4);
    transition: var(--transition);
  }

  &:hover img {
    transform: scale(1.5);
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
    height: 175px;
  }
`;
