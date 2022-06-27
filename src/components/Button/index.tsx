import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IButtonProps } from 'common/types';

const Btn = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.75rem 2rem;
  min-width: 138px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  background-color: transparent;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
  color: #135cc8;
  border: 2px solid #3c83ec;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    border-color: #135cc8;
    background-color: #135cc8;
    color: #fff;
  }
`;

const Button: FunctionComponent<IButtonProps> = ({ onClick }): JSX.Element => {
  return <Btn onClick={onClick}>Load More</Btn>;
};

export default Button;
