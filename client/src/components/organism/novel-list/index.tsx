import React from 'react';
import * as S from './style';
import Row from '../../atom/row';
import Text, { TextType } from '../../atom/text';

type Props = {
    className?: string;
    headingText?: string;
    contents: {
        title: string;
        link: string;
    }[];
};

const NovelList: React.FC<Props> = (props: Props) => {
    const { className, headingText, contents } = props;
    return (
        <S.NovelListContainer className={className}>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            {contents.map(c => (
                <Row key={c.title + c.link} link={c.link} title={c.title} />
            ))}
        </S.NovelListContainer>
    );
};

export default NovelList;
