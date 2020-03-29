import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    imgSrc: string;
    link?: string;
    children?: React.ReactNode;
};

const Thumbnail: React.FC<Props> = (props: Props): ReactElement => {
    const { imgSrc, link, children } = props;

    return (
        <S.ThumbnailContainer to={link}>
            <S.ThumbnailImage src={imgSrc} />
            {children && <S.ThumbnailContent>{children}</S.ThumbnailContent>}
        </S.ThumbnailContainer>
    );
};

export default Thumbnail;
