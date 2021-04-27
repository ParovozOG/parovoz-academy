import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 24px;

  background-color: #302683;
  background-size: 82px 47px;
  background-image: repeating-linear-gradient(
      150deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.06) 1px,
      transparent 0,
      transparent 41px
    ),
    repeating-linear-gradient(
      -150deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.06) 1px,
      transparent 0,
      transparent 41px
    );
`;

const MainInfo = styled.div`
  display: flex;

  margin: 10vh 0;
  max-width: 1000px;

  & > * {
    margin: 0 16px;
  }
`;

const Logo = styled.img.attrs(() => ({ src: logo }))`
  width: 332px;
  height: 149px;

  align-self: center;
`;

const Message = styled.p`
  font-size: 30px;
  line-height: 1.333em;
  text-align: left;
  font-family: 'TT Norms Pro', 'Arial', sans-serif;
  color: #fff;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <MainInfo>
        <Logo />
        <Message>
          Научитесь создавать и программировать современные веб-интерфейсы,
          начните карьеру в IT, оттачивайте своё мастерство.
        </Message>
      </MainInfo>
    </HeaderWrapper>
  );
};
