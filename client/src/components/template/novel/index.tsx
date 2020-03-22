import React, { ReactElement } from 'react';
import Classifications from '../../molecule/classifications';
import * as S from './style';
import DynamicHTML from '../../molecule/dynamic-html';
import Accordion from '../../molecule/accordion';
import SidePanel from '../../organism/side-panel';

const title = "Martial God Asura";
const type = ["Chinese Novel"];
const genre = ["Adventure", "Action", "Ecchi", "Fantasy", "Harem", "Martial Arts", "Mature", "Romance", "Seinen", "Supernatural", "Xianxia"];
const tags = ["Battle Academy", "Bullying", "Comedic Undertone", "Fearless Male Lead", "Hot-blooded Male Lead", "Orphans", "Ranked by Strength", "Revenge", "Ruthless Male lead", "Special Abilities", "Strong Female Lead", "Strong Female Side Characters", "Strong Male Lead", "Sudden Power Growth", "Training", "Underestimated Male Lead", "Wars", "Weak to Strong"];
const language = ["Chinese"];
const author = ["Kindhearted Bee", "Shan Liang de Mi Feng"]
const artist = ["Kindhearted Bee", "Shan Liang de Mi Feng"];
const year = ["2002"];
const status = ["Ongoing"];
const altNames = ["Tu La Vũ Thần", "Xiuluo Wushen", "修罗武神", "修羅武神"];
const relatedSeries = ["A Martial Odyssey", "A Mistaken Marriage Match – A Generation of Military Counselor", "Absolute Duo", "Arifureta", "AntiMagic Academy “The 35th Test Platoon”"]
const description = "<p>Even if you have potential, it does not mean you are a genius. You can learn mysterious martial arts, and you can learn without a teacher.</p><p>Even if you have strength, despite having numerous precious treasures, you may not be able to defeat my spirit army.</p><p>Who am I? Every living thing in the world views me as Asura, but I didn’t know, so I became a martial god as Asura.</p>";

// #region Start placeholder
const generateClassification = (strs: string[]) => strs.map(str => ({ name: str, link: '#' }));

const content = [
    { heading: "Download Links", content: <Classifications classifications={generateClassification(tags)}/> }
]
// #endregion Start placeholder

const Novel: React.FC = (): ReactElement => {
    return(
        <S.NovelContainer>
            <S.NovelWrapper>
                <S.NovelTitleWrapper>
                    <S.NovelTitle>{title}</S.NovelTitle>
                </S.NovelTitleWrapper>

                <S.NovelContentWrapper>
                    <S.NovelContent>
                        <S.NovelPortraitWrapper>
                            <S.NovelPortrait src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wirofBlPHzaENMu5RCxx9T2gNjB.jpg"/>
                        </S.NovelPortraitWrapper>

                        <Classifications headingText="Type" classifications={generateClassification(type)} inline/>
                        <Classifications headingText="Genre" classifications={generateClassification(genre)} inline/>
                        <Classifications headingText="Tags" classifications={generateClassification(tags)} inline/>
                        <Classifications headingText="Language" classifications={generateClassification(language)}/>
                        <Classifications headingText="Author(s)" classifications={generateClassification(author)}/>
                        <Classifications headingText="Artist(s)" classifications={generateClassification(artist)}/>
                        <Classifications headingText="Year" classifications={generateClassification(year)}/>
                        <Classifications headingText="Status" classifications={generateClassification(status)}/>
                    </S.NovelContent>

                    <S.NovelContent>
                        <S.NovelDescriptionHeading>Description</S.NovelDescriptionHeading>
                        {description && <DynamicHTML HTMLString={description}/>}

                        <Classifications headingText="Alternative Names" classifications={generateClassification(altNames)}/>
                        <Classifications headingText="Related Series" classifications={generateClassification(relatedSeries)}/>
                        <Classifications headingText="You May Also Like" classifications={generateClassification(relatedSeries)}/>
                        <Accordion accordionContent={content} />
                    </S.NovelContent>      
                </S.NovelContentWrapper>
            </S.NovelWrapper>
            
            <S.NovelSidePanel/>
            
        </S.NovelContainer>
    );
}

export default Novel;