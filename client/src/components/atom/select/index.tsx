import React, { ReactElement, useState, useRef } from 'react';
import { useOnClickOutside } from '../../../utilities/hooks';
import * as S from './style';

type SelectOptions = {
  displayName: string;
  value: string;
};

type Props = {
  options: SelectOptions[];
  optionName: string;
  onSelect: (o: SelectOptions) => void;
  defaultValue?: string;
  maxHeight?: string;
};

const Select = (props: Props): ReactElement => {
  const { onSelect, defaultValue, options, optionName, maxHeight } = props;
  const [selected, setSelected] = useState(-1);
  const [selectOpen, setSelectOpen] = useState(false);

  const selectRef = useRef(document.createElement('div'));

  useOnClickOutside(selectRef, () => setSelectOpen(false));

  return (
    <S.SelectContainer ref={selectRef} onClick={(): void => setSelectOpen(!selectOpen)}>
      <S.SelectOptionSelected>
        {selected === -1 ? defaultValue : options[selected].displayName}
        <S.SelectIcon active={selectOpen} />
      </S.SelectOptionSelected>
      <S.SelectOptionsContainer active={selectOpen} height={maxHeight} autoHide>
        {options.map((o, idx) => (
          <S.SelectOption
            selected={idx === selected}
            key={o.value}
            onClick={(): void => {
              if (idx === selected) return;
              setSelected(idx);
              onSelect(options[idx]);
            }}
          >
            <S.SelectOptionInput id={`${o.displayName}_${o.value}`} name={optionName} />
            <S.SelectOptionLabel htmlFor={`${o.displayName}_${o.value}`}>{o.displayName}</S.SelectOptionLabel>
          </S.SelectOption>
        ))}
      </S.SelectOptionsContainer>
    </S.SelectContainer>
  );
};

export default Select;
