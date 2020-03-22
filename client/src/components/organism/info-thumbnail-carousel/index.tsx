import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import * as S from './style';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import Text, { TextType } from '../../atom/text';
import Novel from '../../../store/models/entities/Novel';

type Props = {
    className?: string;
    content: Novel[];
    headingText?: string;
};

const InfoThumbnailCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { content, headingText, className } = props;

    const sliderOptions: Settings = {
        ...DEFAULT_SLIDER_SETTINGS,
        swipeToSlide: true,
        prevArrow: <S.InfoThumbnailCarouselArrow />,
        nextArrow: <S.InfoThumbnailCarouselArrow />,
        variableWidth: true,
        centerMode: false
    };

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <S.InfoThumbnailCarouselContainer className={className}>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            <S.InfoThumbnailCarouselSlider {...sliderOptions}>
                {content.map(({ handle, title, genres, coverImage, type }) =>
                    <S.InfoThumbnailCarouselItem
                        key={handle}
                        heading={title}
                        subtitle={type}
                        genre={genres.map(g => g.name).reduce((acc, curr, idx) => `${acc}${genres.length - 1 === idx ? ', ' : ''} ${curr}`, '')}
                        image={coverImage[0]}
                        link={`novel/${handle}`}
                    />  
                )}
            </S.InfoThumbnailCarouselSlider>
        </S.InfoThumbnailCarouselContainer>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default InfoThumbnailCarousel;
