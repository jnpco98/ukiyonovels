import React from 'react';
import * as S from './style';
import { useMediaQuery } from 'react-responsive';
import { SMALL } from '../../../settings/media';

const genre = ["Adventure", "Action", "Fantasy", "Martial Arts", "Mature", "Romance", "Seinen", "Supernatural", "Xianxia", "Adventure", "Action", "Fantasy", "Martial Arts", "Mature", "Romance", "Seinen", "Supernatural", "Xianxia"];
const classification = ["Light novel", "Web novel"];
const status = ['Complete', 'Ongoing', 'Hiatus'];

const generateLink = (strs: string[]) => strs.map(str => ({ name: str, link: '#' }));

const content = [
    { heading: "Genre", content: <S.FooterGenreClassifications headingText="Genre" classifications={generateLink(genre)}/> },
    { heading: "Status", content: <S.FooterClassifications headingText="Status" classifications={generateLink(status)}/> }, 
    { heading: "Novel Type", content: <S.FooterClassifications headingText="Novel type" classifications={generateLink(classification)}/> },
]

const Footer = () => {
    const isSmallScreen = useMediaQuery({ minWidth: SMALL });

    return (
        <S.FooterContainer>
            {
                !isSmallScreen ? 
                    <S.FooterAccordionWrapper>
                        <S.FooterAccordion accordionContent={content} initialOpen={false}/>
                    </S.FooterAccordionWrapper> :
                    <S.FooterClassificationLinksWrapper>
                        {content.map(c => c.content)}
                    </S.FooterClassificationLinksWrapper>
            }

            <S.FooterContactWrapper>
                <S.FooterLinks>Contact</S.FooterLinks>
                <S.FooterContactText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius neque quibusdam tempore saepe pariatur voluptates, ut eligendi! Autem doloribus deleniti harum neque, quidem ea commodi voluptates, cupiditate quia explicabo hic ullam? Dolor impedit facilis modi veritatis dolore deleniti cupiditate rem iure id ex temporibus provident expedita, tempore enim nisi animi aperiam aliquam voluptatem suscipit!</S.FooterContactText>
            </S.FooterContactWrapper>

            <S.FooterLinksWrapper>
                <S.FooterLinks>&copy; 2020 UkiyoNovels</S.FooterLinks>
                <S.FooterLinks>Terms &amp; conditions</S.FooterLinks>
                <S.FooterLinks>Privacy policy</S.FooterLinks>
                <S.FooterLinks>Copyright</S.FooterLinks>
            </S.FooterLinksWrapper>
        </S.FooterContainer>
    );
};

export default Footer;