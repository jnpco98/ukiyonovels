import React from 'react';
import * as S from './style';
import Bar from '../../atom/bar';

type Props = {
    className?: string;
    headingText?: string;
    contents: {
        title: string;
        rating: number;
    }[];
};

const RatingList: React.FC<Props> = (props: Props) => {
    const { headingText, contents, className } = props;
    return (
        <S.RatingListContainer className={className}>
            {headingText && <S.RatingListHeading>{headingText}</S.RatingListHeading>}
            {contents.map(c => (
                <Bar key={c.title + c.rating} fillRate={c.rating} title={c.title} />
            ))}
        </S.RatingListContainer>
    );
};

export default RatingList;
