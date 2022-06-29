import { IInputButtonProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Input = styled.input``;

const InputButton: FunctionComponent<IInputButtonProps> = ({
  placeholder,
  onChange,
}): JSX.Element => {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
    />
  );
};

export default InputButton;
