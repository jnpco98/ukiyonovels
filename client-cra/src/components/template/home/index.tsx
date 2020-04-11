/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement, useState } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import { RouteComponentProps } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swiper from 'react-id-swiper';
import Select, { Theme, ActionMeta, ValueType, GroupType, OptionsType, createFilter } from 'react-select';
import NovelCardList, { DEFAULT_NOVEL_CARD_LIST_VARIABLES } from '../../organism/novel-card-list';
import * as S from './style';

import { homepage } from '../../../settings/config/settings.json';
import { homeQuery } from '../../../__generated__/homeQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';
import { DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES } from '../../organism/novel-thumbnail-carousel';
import { sidePanel_aggregates$key } from '../../../__generated__/sidePanel_aggregates.graphql';

import 'swiper/css/swiper.css';
import Button, { ButtonType } from '../../atom/button';

// primary secondary tertiary for graphql with just argument diff
export const homeRelayQuery = graphql`
  query homeQuery(
    $novelThumbnailCarouselSort: String
    $novelThumbnailCarouselCount: Float
    $novelsCount: Float
    $novelsSort: String
    $novelWhere: NovelWhere
    $novelReverse: Boolean
    $novelAfter: String
  ) {
    ...novelThumbnailCarousel_default
    ...novelThumbnailCarousel_latest
    ...novelCardList_novels
  }
`;

const defaultVariables = {
  ...DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES,
  ...DEFAULT_NOVEL_CARD_LIST_VARIABLES
};

const params = {
  slidesPerView: 2,
  centeredSlides: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  watchOverflow: true,
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    667: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1000: {
      slidesPerView: 5
    }
  }
};

type SelectOption = { value: string; label: string };

const optionGenre: OptionsType<{ value: string; label: string }> = [
  { value: 'Romance', label: 'Romance' },
  { value: 'School Life', label: 'School Life' },
  { value: 'Adventure', label: 'Adventure' }
];
const optionTags: OptionsType<{ value: string; label: string }> = [
  { value: 'Another World', label: 'Another World' },
  { value: 'Reincarnation', label: 'Reincarnation' },
  { value: 'Weak to Strong', label: 'Weak to Strong' }
];
const optionType: OptionsType<{ value: string; label: string }> = [
  { value: 'Light Novel', label: 'Light Novel' },
  { value: 'Chinese Novel', label: 'Chinese Novel' },
  { value: 'Web Novel', label: 'Web Novel' }
];

function generateCards(cnt: number) {
  return Array(cnt)
    .fill(0)
    .map((e, idx) => (
      <S.TestCardWrapper key={idx}>
        <S.TestCard>
          <div className="card__content">
            <div className="card__content-image">
              <a href="/" className="card__content-image__link" />
            </div>
            <div className="card__content-details">
              <p className="card__content-details__title">
                <a href="/">{idx} -> Selector</a>
              </p>
              <p className="card__content-details__title">
                <a href="/">
                  MA15+ <span className="is-dot-item" />
                  2014 <span className="is-dot-item" />
                  24 Episodes
                </a>
              </p>
              <p className="card__content-details__title">
                <span className="is-snippet">Web Novel</span>
                <span className="is-snippet">Chinese</span>
              </p>
            </div>
            <div className="card__content-details__reveal">
              <a className="card__content-details__reveal-content" href="/">
                <S.CardPlayIcon />
                {/* <span className="is-play-icon" /> */}
                Start Reading
              </a>
            </div>
          </div>
        </S.TestCard>
      </S.TestCardWrapper>
    ));
}

function customTheme(theme: Theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'orange',
      primary: 'green'
    }
  };
}

type Props = {
  appData: sidePanel_aggregates$key;
} & RouteComponentProps;

function Filters() {
  const [filterTags, setFilterTags] = useState<ValueType<SelectOption>>([]);
  const [filterGenres, setFilterGenres] = useState<ValueType<SelectOption>>([]);
  const [filterType, setFilterType] = useState<ValueType<SelectOption>>([]);

  function handleTagChange(selected: ValueType<SelectOption>, action: ActionMeta) {
    setFilterTags(selected);
  }

  function handleGenreChange(selected: ValueType<SelectOption>, action: ActionMeta) {
    setFilterGenres(selected);
  }

  function handleTypeChange(selected: ValueType<SelectOption>, action: ActionMeta) {
    setFilterType(selected);
  }

  return (
    <div style={{ padding: '5rem', background: '#3b0087', width: '50%', maxWidth: '1300px', height: '38rem' }}>
      <Select
        options={optionGenre}
        theme={customTheme}
        className=""
        placeholder="Search Genre"
        isSearchable
        isMulti
        filterOption={createFilter({ ignoreAccents: false })}
        autoFocus
        noOptionsMessage={() => 'No other genres'}
        onChange={handleGenreChange}
      />
      <Select
        options={optionTags}
        theme={customTheme}
        className=""
        placeholder="Search Tags"
        filterOption={createFilter({ ignoreAccents: false })}
        isSearchable
        isMulti
        autoFocus
        noOptionsMessage={() => 'No other tags'}
        onChange={handleTagChange}
      />
      <Select
        options={optionType}
        theme={customTheme}
        className=""
        placeholder="Search Type"
        filterOption={createFilter({ ignoreAccents: false })}
        isSearchable
        isMulti
        autoFocus
        noOptionsMessage={() => 'No other types'}
        onChange={handleTypeChange}
      />
      <Button buttonType={ButtonType.Info}>Find novel</Button>
    </div>
  );
}

function Home(props: Props): ReactElement {
  const { appData } = props;
  const { props: relayProps, error, retry } = useQuery<homeQuery>(homeRelayQuery, defaultVariables);
  const [count, setCount] = useState(10);

  setTimeout(() => {
    setCount(30);
  }, 5000);
  const width = 200;

  if (error) return <div>{error.message}</div>;
  if (relayProps) {
    return (
      <>
        <S.HomeBanner contents={homepage.heroBanner} />
        <div style={{ padding: '5rem', background: '#3b0087', width: '100%', maxWidth: '1300px', height: '38rem' }}>
          <Swiper {...params} shouldSwiperUpdate>
            {generateCards(count)}
          </Swiper>
        </div>
        <Filters />
        <S.HomeContainer>
          <S.HomeWrapper>
            <S.HomeNovelThumbnailCarousel
              headingText={homepage.featuredNovels.headingText}
              type="latest"
              novels={relayProps as any}
            />
            <S.HomeNovelThumbnailCarousel
              headingText={homepage.featuredNovels.headingText}
              type="featured"
              novels={relayProps as any}
            />
            <NovelCardList
              headingText={homepage.latestRelease.headingText}
              buttonText={homepage.latestRelease.actionButtonText}
              novelsKey={relayProps as any}
            />
          </S.HomeWrapper>
          <S.HomeSidePanel classifications={appData} enabledClassifications={['genres', 'status', 'tags', 'types']} />
        </S.HomeContainer>
      </>
    );
  }

  return <Loader type={LoaderType.Ring} />;
}

export default Home;
