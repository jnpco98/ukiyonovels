import React, { ReactElement } from 'react';
import * as S from './style';

const PageNotFound: React.FC = (): ReactElement => {
    return (
        <S.PageNotFoundContainer>
            <S.PageNotFoundHeading>OOPS</S.PageNotFoundHeading>
            <S.PageNotFoundSubheading>404 - The page can't be found</S.PageNotFoundSubheading>
        </S.PageNotFoundContainer>
    );
};

export default PageNotFound;