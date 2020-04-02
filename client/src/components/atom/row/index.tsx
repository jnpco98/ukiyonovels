import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    className?: string;
    title: string;
    count?: number;
    link?: string;
    onClick?: (event: React.MouseEvent) => void;
};

const Row: React.FC<Props> = (props: Props): ReactElement => {
    const { className, title, count, link, onClick = () => {} } = props;

    return (
        <S.RowContainer className={className} onClick={onClick}>
            <S.RowTitle to={link}>{title}</S.RowTitle>
            {count && <S.RowCount>{Math.floor(count)}</S.RowCount>}
        </S.RowContainer>
    );
};

export default Row;
