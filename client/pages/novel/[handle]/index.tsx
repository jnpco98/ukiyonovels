import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import SidePanel from '@components/organism/SidePanel';
import Text, { TextType } from '@components/atom/Text';
import * as M from '@utilities/media';
import NovelInfo, { NovelInfoContent } from '@components/organism/NovelPanel';
import { t } from '@utilities/locales';
import List from '@components/molecule/List';
import { Responsive } from '@utilities/mixins';

type NovelInfo = { title: string, description: string, alternativeNames: string[], relatedNovels: string[], recommendedNovels: string[] } & NovelInfoContent;

const mockNovel: NovelInfo = {
  coverImage: `https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcvEUXtNFRBthcDmFXo8Lhc4L10J5s2WVkm9ipP6V_9fM5Jl5x8mmacyTnR8pj_Y2ZM3gaiwontqaMdQh7gG4cdELHgbILEQzg.jpg`,
  title: `Anohana: The Flower We Saw That Day`,
  description: `Tsukuru, attending school as usual, is suddenly summoned to a different world with his classmates. However, what awaits them after being summoned is a hero auction. in which each country bid for heroes to defeat the demon king. While his classmates who got cheat jobs sold for sky-high prices, Tsukuru, with the obvious loser jobs of “Chef” wasn’t sold at all, and was thrown out a transfer gate to a magic forest in the middle of nowhere, inhabited by many powerful monsters. Tsukuru, narrowly avoiding death many times at the hands of monsters, is thrust onto the path of the strongest!`,
  type: 'Light Novel',
  genres: ['Action', 'Adventure', 'Fantasy', 'Harem', 'Mystery', 'Romance', 'Shounen', 'Action', 'Adventure', 'Fantasy', 'Harem', 'Mystery', 'Romance', 'Shounen'],
  tags: ['Action', 'Adventure', 'Fantasy', 'Harem', 'Mystery', 'Romance', 'Shounen', 'Action', 'Adventure', 'Fantasy', 'Harem', 'Mystery', 'Romance', 'Shounen'],
  origins: ['Chinese'],
  authors: ['Nanjamonja', 'なんじゃもんじゃ'],
  artists: ['Nanjamonja', 'なんじゃもんじゃ'],
  year: '2000',
  alternativeNames: ['Garbage Brave【Revenge story of the hero who was been thrown away after summoned to another world】', 'ガベージブレイブ【異世界に召喚され捨てられた勇者の復讐物語】'],
  relatedNovels: ['Garbage Brave【Revenge story of the hero who was been thrown away after summoned to another world】', 'ガベージブレイブ【異世界に召喚され捨てられた勇者の復讐物語】'],
  recommendedNovels: ['Garbage Brave【Revenge story of the hero who was been thrown away after summoned to another world】', 'ガベージブレイブ【異世界に召喚され捨てられた勇者の復讐物語】'],
  status: 'Complete'
} 

const Wrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    width: 100%;
  }

  ${M.MEDIA_XSMALL} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 30%;
    }

    & > *:nth-child(2) {
      width: 70%;
    }
  }
`;

const SubHeading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  margin-bottom: 1.5rem;
`;

const Description = styled.div`
  margin-bottom: 1.5rem;
`;

const ChapterList = styled(List)`
  margin-bottom: 3rem;
`;
  
function generateList(cnt: number) {
  return Array(cnt).fill(0).map(_ => ({
    title: 'Kaguya-Sama: Love is War',
    subtitle: Math.floor(Math.random() * 4023) + 1,
    link: '/',
    prefix: '23'
  }));
}

const chapterListResponsive: Responsive = {
  itemsPerRow: 2,
  gap: 0.7,
  breakpoints: {
    
  }
}

function NovelByHandle() {
  const router = useRouter();
  const { handle } = router.query;
  const { descriptionHeading, alternativeNamesHeading, relatedNovelsHeading, recommendedNovelsHeading, chapterListHeading } = t('novel');
  
  const { title, description, alternativeNames, relatedNovels, recommendedNovels, ...novelInfo } = mockNovel;

  function renderInfo(heading: string, data: string[]) {
    return(
      <Description>
        <SubHeading>{heading}</SubHeading>
        {data.map((info, idx) => <Text key={idx}>{info}</Text>)}
      </Description>
    );
  }

  return(
    <Page>
      <Layout layoutType="primarySecondary" main navOffset>
        <Layout gutterRight>
          <Text textType={TextType.PageTitle}>{title}</Text>
          <Wrapper>
            <NovelInfo content={novelInfo} gutterRight/>
            <Layout>
              {renderInfo(descriptionHeading, [description])}
              {renderInfo(alternativeNamesHeading, alternativeNames)}
              {renderInfo(relatedNovelsHeading, relatedNovels)}
              {renderInfo(recommendedNovelsHeading, recommendedNovels)}
              <ChapterList heading={chapterListHeading} contents={generateList(20)} responsive={chapterListResponsive} maxHeight='30rem'/>
            </Layout>
          </Wrapper>
        </Layout>
        <SidePanel/>
      </Layout>
    </Page>
  );
}

export default NovelByHandle;