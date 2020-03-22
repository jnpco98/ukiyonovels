import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as S from './style';
import Thumbnail from '../../atom/thumbnail';
import { truncate } from '../../../utilities/string';
import { SMALL, XXSMALL, MEDIUM } from '../../../settings/media';

type Props = {
    className?: string;
    title: string;
    description: string;
    link: string;
    imgSrc: string;
    buttonText?: string;

    meta?: {
        updatedOn?: string;
        likesCount?: string;
        viewsCount?: string;
    };
};

const InfoCard: React.FC<Props> = (props: Props): ReactElement => {
    const { className, title, description, link, imgSrc, buttonText, meta } = props;

    const isXXSmallScreen = useMediaQuery({ minWidth: XXSMALL });
    const isSmallScreen = useMediaQuery({ minWidth: SMALL });
    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    let textTruncate = 100;
    if (isXXSmallScreen) textTruncate = 140;
    if (isSmallScreen) textTruncate = 250;
    if (isDesktopScreen) textTruncate = 350;

    return (
        <S.InfoCardContainer className={className}>
            <Thumbnail imgSrc={imgSrc} link={link} />
            <S.InfoCardContent>
                <S.InfoCardTitle>{title}</S.InfoCardTitle>
                <S.InfoCardDescription HTMLString={truncate(description, textTruncate)} />
                <S.InfoCardMetaWrapper>
                    {meta && (
                        <S.InfoCardMeta>
                            {meta.updatedOn && (
                                <>
                                    <S.InfoCardCalendarIcon />
                                    <S.InfoCardText>{meta.updatedOn}</S.InfoCardText>
                                </>
                            )}
                            {meta.likesCount && (
                                <>
                                    <S.InfoCardLikesIcon />
                                    <S.InfoCardText>{meta.likesCount}</S.InfoCardText>
                                </>
                            )}
                            {meta.viewsCount && (
                                <>
                                    <S.InfoCardViewsIcon />
                                    <S.InfoCardText>{meta.viewsCount}</S.InfoCardText>
                                </>
                            )}
                        </S.InfoCardMeta>
                    )}
                    {
                        buttonText &&
                            <S.InfoCardButtonContinue href={link}>
                                {buttonText || 'Continue reading'}
                            </S.InfoCardButtonContinue>
                    }
                </S.InfoCardMetaWrapper>
            </S.InfoCardContent>
        </S.InfoCardContainer>
    );
};

export default InfoCard;
