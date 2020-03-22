import React from 'react';
import * as S from './style';
import Text, { TextType } from '../../atom/text';
import Novel from '../../../store/models/entities/Novel';
import { truncateNumber } from '../../../utilities/string';

type Props = {
    className?: string;
    headingText?: string;
    buttonText: string;
    content: Novel[];
};

const InfoCardList: React.FC<Props> = (props: Props) => {
    const { headingText, content, className, buttonText } = props;
    return (
        <S.CardListContainer className={className}>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            {content.map(({ handle, title, lastModified, description, coverImage, likes, views }) => (
                <S.CardListItem
                    buttonText={buttonText}
                    key={handle}
                    title={title}
                    link={`novel/${handle}`}
                    imgSrc={coverImage[0]}
                    description={description}
                    meta={{ 
                        updatedOn: new Date(lastModified).toDateString(), 
                        likesCount: truncateNumber(likes, 1), 
                        viewsCount: truncateNumber(views, 1) 
                    }}
                />
            ))}
        </S.CardListContainer>
    );
};

export default InfoCardList;
