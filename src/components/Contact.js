import React from 'react';
import { styled } from 'styled-components';
import { menuAndTags, sectionTitle } from '../styles/TextStyles';
import telegram from '../images/icons/telegram.svg';
import mail from '../images/icons/email.svg';

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <ContentWrapper>
        <ButtonBlock>
          <BlockTitle>Send an email</BlockTitle>
          <a
            href='mailto:valerii.s.shevchenko@gmail.com?subject=PROJECT INQUIRY&body=Hi, Valerii! %0D%0A %0D%0A I have a project in mind. Here are the details. %0D%0A %0D%0A Task: %0D%0A %0D%0A Context: %0D%0A %0D%0A Budget: %0D%0A %0D%0A Desirable deadline: %0D%0A %0D%0A …'
            target='_blank'
          >
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
`;

const Title = styled(sectionTitle)``;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  width: var(--card-width);
  height: var(--card-width);
  flex-direction: column;
  gap: 20px;
`;

const BlockTitle = styled(menuAndTags)`
  border: none;
  background-color: transparent;
  text-align: left;
`;
const Button = styled.button`
  border: solid 1px var(--color-text);
  background-color: transparent;
  border-radius: var(--border-radius-ext);
  height: 341px;
  width: var(--card-width);
  padding: 0 20px;
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--main-shadow);
    background-color: var(--color-button-hover);
    cursor: pointer;
  }

  img {
    height: calc(var(--card-width) / 4);
    width: calc(var(--card-width) / 4);
    transition: var(--transition);
  }

  &:hover img {
    transform: scale(1.5);
  }
`;
