import React, { ReactElement } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import { RouteComponentProps } from 'react-router-dom';
import NovelList from '../../organism/novel-list';
import * as S from './style';
import Loader, { LoaderType } from '../../atom/loaders';
import { novelsQuery, novelsQueryVariables } from '../../../__generated__/novelsQuery.graphql';
import { NovelWhere } from '../../../__generated__/novelQuery.graphql';

export const novelsRelayQuery = graphql`
  query novelsQuery($novelsSort: String, $novelsCount: Float, $novelWhere: NovelWhere, $novelReverse: Boolean) {
    ...novelList
  }
`;

type Props = RouteComponentProps<{ type?: string; key?: string }>;

function createNovelQuickSort(key: string): string | null {
  let sort = null;
  if (key === 'latest') sort = 'lastModified';
  if (key === 'most-popular') sort = 'views';
  return sort;
}

function createNovelQuickFilter(type: string, key: string): NovelWhere | null {
  let novelWhere = null;
  if (key) {
    if (type === 'genre') novelWhere = { AND: [{ genres: { contains: key } }] };
    if (type === 'tagged') novelWhere = { AND: [{ tags: { contains: key } }] };
    if (type === 'type') novelWhere = { AND: [{ type: { contains: key } }] };
    if (type === 'status') novelWhere = { AND: [{ status: { contains: key } }] };
  }
  return novelWhere;
}

function Novels(props: Props): ReactElement {
  const { match } = props;
  const { type, key } = match.params;

  const variables: novelsQueryVariables = { novelsSort: 'title', novelsCount: 50 };
  const quickSort = createNovelQuickSort(type);
  if (quickSort) {
    variables.novelsSort = quickSort;
    variables.novelReverse = true;
  } else {
    const quickFilter = createNovelQuickFilter(type, key);
    if (quickFilter) variables.novelWhere = quickFilter;
  }

  const { props: relayProps, error, retry } = useQuery<novelsQuery>(novelsRelayQuery, variables);

  if (error) return <div>{error.message}</div>;
  if (relayProps)
    return (
      <S.NovelsContainer>
        <S.NovelsWrapper>
          <S.NovelTitle>Novel List</S.NovelTitle>
          <NovelList novelsKey={relayProps} />
        </S.NovelsWrapper>
        <S.NovelsSidePanel />
      </S.NovelsContainer>
    );

  return <Loader type={LoaderType.Ring} />;
}

export default Novels;
