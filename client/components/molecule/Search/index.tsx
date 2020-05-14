import React, { useState, forwardRef, ForwardRefRenderFunction, FormEvent, RefObject } from 'react';
import * as S from './style';

type Props = {
  active?: boolean;
  placeholder?: string;
  onSubmit?: Function;
};

function Search(props: Props, ref: RefObject<HTMLDivElement>) {
  const { onSubmit, active, placeholder } = props;

  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchInput.length) return;
    if (onSubmit) onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <S.SearchContainer ref={ref} active={active}>
      <S.SearchContent onSubmit={handleSearchSubmit}>
        <S.SearchInput
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <S.SearchButton>
          <S.SearchButtonIcon />
        </S.SearchButton>
      </S.SearchContent>
    </S.SearchContainer>
  );
}

export default forwardRef(Search as ForwardRefRenderFunction<HTMLDivElement, Props>);