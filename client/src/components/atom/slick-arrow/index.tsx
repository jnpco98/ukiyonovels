import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

type Props = {
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const SlickArrow: React.FC<Props> = (props: Props) => {
    const { className, onClick, children } = props;

    /* eslint-disable  */
    return <S.SlickArrowContainer className={className} onClick={onClick}><FontAwesomeIcon icon={faCaretSquareRight}/></S.SlickArrowContainer>;
    /* eslint-enable  */
};

export default SlickArrow;
