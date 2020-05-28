import React, { useState, forwardRef, ForwardRefRenderFunction, FormEvent, RefObject } from 'react';
import * as S from './style';
import Link from 'next/link';

type Props = {
  active?: boolean;
  placeholder?: string;
  advancedSearch?: string;
  onSubmit?: Function;
};

function Search(props: Props, ref: RefObject<HTMLDivElement>) {
  const { onSubmit, active, advancedSearch, placeholder } = props;

  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchInput.length) return;
    if (onSubmit) onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <S.Container ref={ref} active={active}>
      <S.Form onSubmit={handleSearchSubmit}>
        <S.Input
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <S.Submit>
          <S.Icon />
        </S.Submit>
      </S.Form>
      <Link href='/advanced-search'>
        <S.AdvancedSearch>{advancedSearch}</S.AdvancedSearch>
      </Link>
    </S.Container>
  );
}

export default forwardRef(Search as ForwardRefRenderFunction<HTMLDivElement, Props>);
