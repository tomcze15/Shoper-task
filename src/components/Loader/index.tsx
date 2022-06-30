import { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import spinnerImg from 'assets/spinner.png';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.img`
  animation: ${rotate} 2s linear infinite;
`;

const Loader: FunctionComponent = (): JSX.Element => {
  return (
    <Wrapper>
      <Spinner src={spinnerImg} />
    </Wrapper>
  );
};

export default Loader;
