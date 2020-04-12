import React, { useRef, MouseEvent } from 'react';
import Search from '@components/molecule/Search';
import * as S from './style';
import { useOnClickOutside } from '@utilities/hooks';

type Props = {
  active: boolean;
  setActive: Function;
  onSearchSubmit?: Function;
  placeholder?: string;
};

function SearchOverlay(props: Props) {
  const { onSearchSubmit, active, setActive, placeholder } = props;

  const searchRef = useRef(null);

  function handleClick(event: MouseEvent) {
    setActive(false);
  }
  useOnClickOutside(searchRef, () => setActive(false));

  return (
    <S.Container active={active} centerContent onClick={(event) => handleClick(event)}>
      <Search
        ref={searchRef}
        active={active}
        onSubmit={(query: string) => {
          onSearchSubmit(query);
          setActive(false);
        }}
        placeholder={placeholder}
      />
    </S.Container>
  );
}

export default SearchOverlay;
