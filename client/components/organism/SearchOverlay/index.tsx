import React, { useRef, MouseEvent } from 'react';
import Search from '@components/molecule/Search';
import { useOnClickOutside } from '@utilities/hooks';
import * as S from './style';
import { t } from '@utilities/locales';

type Props = {
  className?: string;
  active: boolean;
  setActive: Function;
  onSearchSubmit?: Function;
  placeholder?: string;
};

function SearchOverlay(props: Props) {
  const { className, onSearchSubmit, active, setActive, placeholder } = props;

  const searchRef = useRef(null);

  function handleClick(event: MouseEvent) {
    setActive(false);
  }
  useOnClickOutside(searchRef, handleClick);

  return (
    <S.Container className={className} active={active} centerContent>
      <Search
        ref={searchRef}
        active={active}
        onSubmit={(query: string) => {
          onSearchSubmit(query);
          setActive(false);
        }}
        placeholder={placeholder || t('components.search.placeholder') as unknown as string || ''}
      />
    </S.Container>
  );
}

export default SearchOverlay;