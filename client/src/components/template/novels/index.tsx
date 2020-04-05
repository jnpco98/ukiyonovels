import React, { ReactElement } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import { RouteComponentProps } from 'react-router-dom';
import NovelList from '../../organism/novel-list';
import * as S from './style';
import Loader, { LoaderType } from '../../atom/loaders';
import { novelsQuery, novelsQueryVariables, NovelWhere } from '../../../__generated__/novelsQuery.graphql';
import { slugify } from '../../../utilities/string';
import { sidePanel_aggregates$key } from '../../../__generated__/sidePanel_aggregates.graphql';
import { appQueryResponse } from '../../../__generated__/appQuery.graphql';
import NovelCardList from '../../organism/novel-card-list';

export const novelsRelayListQuery = graphql`
  query novelsQuery($novelsSort: String, $novelsCount: Float, $novelWhere: NovelWhere, $novelReverse: Boolean) {
    ...novelList
  }
`;

export const novelsRelayCardQuery = graphql`
  query novelsCardQuery($novelsSort: String, $novelsCount: Float, $novelWhere: NovelWhere, $novelReverse: Boolean) {
    ...novelCardList_novels
  }
`;

type Props = { appData: appQueryResponse; card?: boolean } & RouteComponentProps<{ type?: string; key?: string }>;

function createNovelQuickSort(type: string): string | null {
  let sort = null;
  if (type === 'latest') sort = 'lastModified';
  if (type === 'most-popular') sort = 'views';
  if (type === 'top-novels') sort = 'rating';
  return sort;
}

function createNovelQuickFilter(type: string, key: string): NovelWhere | null {
  let novelWhere = null;
  if (key) {
    if (type === 'genre') novelWhere = { AND: [{ genres: { contains: key } }] };
    if (type === 'tagged') novelWhere = { AND: [{ tags: { contains: key } }] };
    if (type === 'type') novelWhere = { AND: [{ type: { contains: key } }] };
    if (type === 'status') novelWhere = { AND: [{ status: { contains: key } }] };
    if (type === 'language') novelWhere = { AND: [{ origins: { contains: key } }] };
    if (type === 'author') novelWhere = { AND: [{ authors: { contains: key } }] };
    if (type === 'artist') novelWhere = { AND: [{ artists: { contains: key } }] };

    if (type === 'alternative-names') novelWhere = { AND: [{ alternativeNames: { contains: key } }] };
    if (type === 'status') novelWhere = { AND: [{ status: { contains: key } }] };
    if (type === 'related') novelWhere = { AND: [{ slug: { contains: slugify(key) } }] };
    if (type === 'recommendations') novelWhere = { AND: [{ slug: { contains: slugify(key) } }] };
  }
  return novelWhere;
}

function Novels(props: Props): ReactElement {
  const { match, appData, card } = props;
  const { type, key = '' } = match.params;

  const variables: novelsQueryVariables = { novelsSort: 'title', novelsCount: 20 };
  const quickSort = createNovelQuickSort(type);
  if (quickSort) {
    variables.novelsSort = quickSort;
    variables.novelReverse = true;
  } else {
    const quickFilter = createNovelQuickFilter(type, key.replace(/-/gi, ' '));
    if (quickFilter) variables.novelWhere = quickFilter;
  }

  const { props: relayProps, error, retry } = useQuery<novelsQuery>(
    card ? novelsRelayCardQuery : novelsRelayListQuery,
    variables
  );

  if (error) return <div>{error.message}</div>;
  if (relayProps)
    return (
      <S.NovelsContainer>
        <S.NovelsWrapper>
          <S.NovelTitle>Novel List</S.NovelTitle>
          {card ? (
            <NovelCardList headingText="" buttonText="Continue Reading" novelsKey={relayProps as any} />
          ) : (
            <NovelList novelsKey={relayProps} />
          )}
        </S.NovelsWrapper>
        <S.NovelsSidePanel classifications={appData} />
      </S.NovelsContainer>
    );

  return <Loader type={LoaderType.Ring} />;
}

export default Novels;
