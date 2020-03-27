import React, { ReactElement } from 'react';
import purifyHTML from '../../../utilities/purify-html';
import * as S from './style';

type Props = {
    HTMLString: string;
    className?: string;
}

const DynamicHTML: React.FC<Props> = (props: Props): ReactElement => {
    const { HTMLString, className } = props;

    return (
        <S.DynamicHTMLContainer className={className} dangerouslySetInnerHTML={{ __html: purifyHTML(HTMLString) }}/>
    );
};

export default DynamicHTML;