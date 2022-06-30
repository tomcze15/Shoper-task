import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ICardProps } from 'common/types';

const Wrapper = styled.div`
  height: 10rem;
  width: fit-content;
  border: 2px solid #3c83ec;
  border-radius: 25px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 15px;
`;

const ImageWrapper = styled.div`
  width: fit-content;
  height: 100%;
  overflow: hidden;
  background-color: yellow;
  text-align: center;

  img {
    border-radius: 25px;
    height: 100%;
  }
`;

const DetailWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem;

  span {
    height: fit-content;
    width: 100%;
  }
`;

const Card: FunctionComponent<ICardProps> = (props): JSX.Element => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={props.image} alt={props.title} />
      </ImageWrapper>
      <DetailWrapper>
        <span>Title: {props.title}</span>
        <span>Price: {props.price} $</span>
      </DetailWrapper>
    </Wrapper>
  );
};

export default Card;
