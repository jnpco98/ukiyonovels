import React from 'react';
import * as S from './style';
import Row from '../../atom/row';

type Props = {
    className?: string;
    headingText?: string;
    contents: {
        title: string;
        count?: number;
        link?: string;
    }[];
};

const QuickSearch: React.FC<Props> = (props: Props) => {
    const { headingText, contents, className } = props;
    return (
        <S.QuickSearchContainer className={className}>
            {headingText && <S.QuickSearchHeading>{headingText}</S.QuickSearchHeading>}
            <S.QuickSearchRows>
                {contents.map(c => (
                    <Row className={`is-bulleted is-decorated`} key={c.title + c.count} count={c.count} title={c.title} link={c.link}/>
                ))}
            </S.QuickSearchRows>
        </S.QuickSearchContainer>
    );
};

export default QuickSearch;
