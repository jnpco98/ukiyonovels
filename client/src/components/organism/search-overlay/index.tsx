import React, { ReactElement, useRef } from 'react';
import Search from '../../molecule/search';
import * as S from './style';

type Props = {
    active: boolean;
    setActive: Function;
    onSearchSubmit?: Function;
    placeholder?: string;
}

const SearchOverlay: React.FC<Props> = (props: Props): ReactElement => {
    const { onSearchSubmit, active, setActive, placeholder } = props;

    const searchRef = useRef(document.createElement('div'));

    const handleClick = (event: React.MouseEvent) => {
        if(event.target instanceof Node && searchRef.current.contains(event.target)) return;
        setActive(false);
    }

    return(
        <S.SearchOverlayContainer 
            active={active} 
            className={`is-content-centered`} 
            onClick={event => handleClick(event)}
        >
            <Search ref={searchRef} active={active} onSubmit={() => { onSearchSubmit(); setActive(false); }} placeholder={placeholder}/>
        </S.SearchOverlayContainer>
    );
}

export default SearchOverlay;