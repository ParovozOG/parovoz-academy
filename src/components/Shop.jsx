import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;

  background-color: #f8f8f8;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 80vw;

  padding: 24px 0;
  gap: 16px;
`;

const PreviewItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-basis: 25%;

  padding: 8px 24px;

  background-color: #fff;

  border-radius: 8px;

  box-shadow: 17px 17px 33px #bebebe, -17px -17px 33px #ffffff;

  transition: box-shadow 0.1s ease;

  &:hover {
    cursor: pointer;

    box-shadow: 21px 21px 42px #bebebe, -21px -21px 42px #ffffff;

    & > h1 {
      color: #e84e1b;
    }
  }
`;

const Text = styled.p`
  font-weight: 300;
`;

const Title = styled.h1`
  color: #3527b6;
  font-size: 20px;
  font-weight: 500;

  text-align: center;
  align-self: center;
`;

const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 76px 0 40px 0;

  background: linear-gradient(
    180deg,
    rgba(248, 248, 248, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const ShopItem = styled.div`
  position: relative;

  width: 800px;

  padding: 8px 32px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  border-radius: 8px;

  box-shadow: 13px 13px 26px #bebebe, -13px -13px 26px #ffffff;

  &:hover {
    cursor: default;
  }

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    content: url(${(p) => p.img});
    opacity: 0.1;
  }
`;

const GroupItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;

  align-self: center;
`;

export const Shop = ({ data }) => {
  const refs = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const onClickHandler = (id) =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <>
      <PreviewWrapper>
        <PreviewContainer>
          {data.map(({ id, name, cost, dateFrom, duration, img }) => (
            <PreviewItem key={id} onClick={() => onClickHandler(id)}>
              <GroupItems>
                <Title>{name}</Title>
                <Image src={img} alt={name} />
              </GroupItems>

              <GroupItems>
                <Text>{cost}₽</Text>
                <Text>{dateFrom}</Text>
                <Text>{duration} дней</Text>
              </GroupItems>
            </PreviewItem>
          ))}
        </PreviewContainer>
      </PreviewWrapper>
      <ShopWrapper>
        {data.map(({ id, name, descr, img }) => {
          return (
            <ShopItem key={id} ref={refs[id]} img={img}>
              <Title>{name}</Title>
              <Text>{descr}</Text>
            </ShopItem>
          );
        })}
      </ShopWrapper>
    </>
  );
};
