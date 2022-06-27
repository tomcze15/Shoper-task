import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ICardProps } from 'common/types';

const Wrapper = styled.div`
  height: 10rem;
  width: 32rem;
  border: 2px solid #3c83ec;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: yellow;
  text-align: center;

  img {
    width: auto;
    height: 100%;
  }
`;

const DetailWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
