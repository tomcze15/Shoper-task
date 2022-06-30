import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ISelectBoxProps } from 'common/types';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SectionContainer = styled.select`
  width: 16rem;
  height: 2rem;
  font-size: 1.2rem;
  border-radius: 10px;
  padding-left: 1rem;
  outline: 0;
  border: 2px solid #000;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Arrow = styled.div`
  position: absolute;
  top: 13px;
  right: 15px;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0px 5px;
  border-color: #000 transparent transparent transparent;
`;

const SelectBox: FunctionComponent<ISelectBoxProps> = ({
  options,
  selected,
  title,
  setSelected,
}): JSX.Element => {
  return (
    <Wrapper>
      <SectionContainer
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option key={title} value="">
          {title}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </SectionContainer>
      <Arrow />
    </Wrapper>
  );
};

export default SelectBox;
