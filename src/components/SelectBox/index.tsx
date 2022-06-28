import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
`;

const SelectBoxContainer = styled.div`
  background-color: #2f3640;
  color: #f5f6fa;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const OptionContainer = styled.div`
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: #414b57;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const Radio = styled.input`
  display: none;
`;

const SelectBox: FunctionComponent = (): JSX.Element => {
  return (
    <Wrapper>
      <SelectBoxContainer>
        <OptionContainer>
          <Radio type="radio" id="option1" name="category" />
          <Label htmlFor="option1">Option 1</Label>
        </OptionContainer>
        <OptionContainer>
          <Radio type="radio" id="option2" name="category" />
          <Label htmlFor="option2">Option 2</Label>
        </OptionContainer>
        <OptionContainer>
          <Radio type="radio" id="option3" name="category" />
          <Label htmlFor="option3">Option 3</Label>
        </OptionContainer>
        <OptionContainer>
          <Radio type="radio" id="option4" name="category" />
          <Label htmlFor="option4">Option 4</Label>
        </OptionContainer>
        <div>Select Video Category</div>
      </SelectBoxContainer>
    </Wrapper>
  );
};

export default SelectBox;
