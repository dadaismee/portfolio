import React from 'react';
import { styled } from 'styled-components';
import { menuAndTags, sectionTitle } from '../styles/TextStyles';
import telegram from '../images/icons/telegram.svg';

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <ContentWrapper>
        <EmailForm>
          <EmailTitle>Send an email</EmailTitle>
          {/* <Email /> */}
        </EmailForm>
        <Telegram>
          <TelegramTitle>Write in Telegram</TelegramTitle>
          <a href='https://t.me/emsiadad' target='_blank'>
            <Button>
              <img src={telegram} />
            </Button>
          </a>
        </Telegram>
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

const EmailForm = styled.div`
  width: var(--card-width);
  gap: 20px;
`;
const EmailTitle = styled(menuAndTags)`
  border: none;
  background-color: transparent;
`;
const Telegram = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TelegramTitle = styled(menuAndTags)`
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
    transition: var(--transition);
  }

  &:hover img {
    transform: scale(1.5);
  }
`;
