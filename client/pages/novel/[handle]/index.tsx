import React from 'react';
import { useRouter } from 'next/router';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import SidePanel from '@components/organism/SidePanel';
import Novel, { NovelContent } from '@components/organism/Novel';

const mockNovel: NovelContent = {
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

function NovelByHandle() {
  const router = useRouter();
  const { handle } = router.query;

  return(
    <Page>
      <Layout layoutType="primarySecondary" main>
        <Layout gutterRight>
          <Novel content={mockNovel}/>
        </Layout>
        <SidePanel/>
      </Layout>
    </Page>
  );
}

export default NovelByHandle;