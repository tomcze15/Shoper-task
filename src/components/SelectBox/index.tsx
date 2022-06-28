import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ISelectBoxProps } from 'common/types';

const SectionContainer = styled.select`
  max-width: 300px;
`;

const SelectBox: FunctionComponent<ISelectBoxProps> = ({
  options,
  selected,
  title,
  setSelected,
}): JSX.Element => {
  return (
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
  );
};

export default SelectBox;
