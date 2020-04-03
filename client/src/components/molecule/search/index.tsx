import React, { ReactElement, useState, forwardRef } from 'react';
import * as S from './style';

type Props = {
  onSubmit?: Function;
  active?: boolean;
  placeholder?: string;
};

const Search: React.FC<Props> = (props: Props, ref: React.RefObject<HTMLDivElement>): ReactElement => {
  const { onSubmit, active, placeholder } = props;

  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchInput.length) return;
    onSubmit && onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <S.SearchContainer ref={ref} active={active} onSubmit={handleSearchSubmit}>
      <S.SearchContent>
        <S.SearchInput
          placeholder={placeholder || 'Find a novel....'}
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <S.SearchButton>
          <S.SearchButtonIcon />
        </S.SearchButton>
      </S.SearchContent>
    </S.SearchContainer>
  );
};

export default forwardRef(Search);
