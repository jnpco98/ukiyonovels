import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import { truncate } from '../../../utilities/string';
import { SMALL, MEDIUM } from '../../../settings/media';
import * as S from './style';

type Props = {
    image: string;
    heading: string;
    subtitle?: string;
    genre?: string;
    link: string;
    className?: string;
};

const InfoThumbnail: React.FC<Props> = (props: Props): ReactElement => {
    const { className, image, heading, subtitle, genre, link } = props;

    const isSmallScreen = useMediaQuery({ minWidth: SMALL });
    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    let textTruncate = 35;
    if (isSmallScreen) textTruncate = 35;
    if (isDesktopScreen) textTruncate = 40;

    return (
        <S.InfoThumbnailContainer className={className}>
            <a href={link}>
                <S.InfoThumbnailImage src={image} alt={heading} />
            </a>
            <S.InfoThumbnailContent>
                <S.InfoThumbnailSubtitle>{subtitle}</S.InfoThumbnailSubtitle>
                <S.InfoThumbnailReadIconLink href={link}>
                    <S.InfoThumbnailIconWrapper>
                        <S.InfoThumbnailReadIcon />
                    </S.InfoThumbnailIconWrapper>
                </S.InfoThumbnailReadIconLink>
                <S.InfoThumbnailHeading>{truncate(heading, textTruncate)}</S.InfoThumbnailHeading>
                <S.InfoThumbnailGenre>{truncate(genre, textTruncate)}</S.InfoThumbnailGenre>
            </S.InfoThumbnailContent>
        </S.InfoThumbnailContainer>
    );
};

export default InfoThumbnail;
