import { useRouter } from "next/router";
import Layout from "@layout/Layout";
import Page from "@layout/Page";
import SidePanel from "@components/organism/SidePanel";
import CardList from "@components/organism/CardList";
import styled from "styled-components";
import { Responsive } from "@utilities/mixins";
import * as M from '@utilities/media';

const SearchResults = styled(CardList).attrs({ cardType: 'standard' })``;

function searchResults(cnt: number) {
  const thumbnail = `https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcvEUXtNFRBthcDmFXo8Lhc4L10J5s2WVkm9ipP6V_9fM5Jl5x8mmacyTnR8pj_Y2ZM3gaiwontqaMdQh7gG4cdELHgbILEQzg.jpg`;
  const content = {
    heading: 'Kaguya-Sama: Love is War',
    inline: ['MA15+', '2014', '24Chs'],
    tabbed: ['Web', 'Chinese'],
    thumbnail
  }

  return Array(cnt).fill(0).map(_ => content);
}

const cardResponsive: Responsive = {
  itemsPerRow: 2,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      itemsPerRow: 3,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      itemsPerRow: 4,
      gap: 0.8
    }
  }
}

function Search() {
  const router = useRouter();
  const { keyword } = router.query;

  const count = 20;

  return(
    <Page>
      <Layout layoutType='primarySecondary' main navOffset footerOffset>
        <Layout gutterRight>
          <SearchResults heading={`Found ${count} results for keyword "Anohana"`} contents={searchResults(count)} responsive={cardResponsive}/>
        </Layout>
        <SidePanel/>
      </Layout>
    </Page>
  );
}

export default Search;