import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../../atom/text';

type Props = {
    classifications: {
        name: string;
        link: string;
    }[],
    className?: string;
    headingText?: string;
    inline?: boolean;
};

const Classifications: React.FC<Props> = (props: Props): ReactElement => {
    const { className, headingText, classifications = [], inline } = props;

    return (
        <S.ClassificationsContainer className={className}>
            {headingText && <S.ClassificationsHeading>{headingText}</S.ClassificationsHeading>}
            <S.ClassificationsList inline={inline}>
            {
                classifications.map(c => 
                    <S.ClassificationsItem>
                        <Text textType={TextType.Anchor} href={c.link}>{c.name}</Text>
                    </S.ClassificationsItem>
                )
            }
            </S.ClassificationsList>
        </S.ClassificationsContainer>
    );
};

export default Classifications;
