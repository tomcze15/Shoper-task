import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ICardProps } from 'common/types';

const Wrapper = styled.div`
  height: 10rem;
  width: fit-content;
  border: 6px solid #444265;
  border-radius: 6px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  background-color: #444265;
  user-select: none;

  &:hover {
    -webkit-box-shadow: 0px 0px 16px 2px rgba(39, 35, 35, 1);
    -moz-box-shadow: 0px 0px 16px 2px rgba(39, 35, 35, 1);
    box-shadow: 0px 0px 16px 2px rgba(39, 35, 35, 1);

    transform: scale(1.05);
  }

  transition: all 0.2s;
`;

const ImageWrapper = styled.div`
  width: fit-content;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  text-align: center;

  img {
    border-radius: 6px;
    height: 100%;
  }
`;

const DetailWrapper = styled.div`
  width: fit-content;
  height: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 1.2rem;
  color: white;

  span {
    height: fit-content;
    width: 100%;
  }
`;

const Description = styled.p`
  max-width: 25rem;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const FooterItem = styled.span`
  white-space: nowrap;
  color: #abb4cd;
`;

const Card: FunctionComponent<ICardProps> = (props): JSX.Element => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={props.image} alt={props.title} />
      </ImageWrapper>
      <DetailWrapper>
        <div>
          <h2>{props.title}</h2>
          <p>Price: {props.price} $</p>
        </div>
        <Description>
          {props.description.length > 150
            ? props.description.substring(0, 150) + '...'
            : props.description}
        </Description>
        <FooterContainer>
          <FooterItem>Brand: {props.brand}</FooterItem>
          <FooterItem>Category: {props.category}</FooterItem>
        </FooterContainer>
      </DetailWrapper>
    </Wrapper>
  );
};

export default Card;
