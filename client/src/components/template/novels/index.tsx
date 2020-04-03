import React, { ReactElement } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import { RouteComponentProps } from 'react-router-dom';
import NovelList from '../../organism/novel-list';
import * as S from './style';
import Loader, { LoaderType } from '../../atom/loaders';
import { novelsQuery } from '../../../__generated__/novelsQuery.graphql';

export const novelsRelayQuery = graphql`
  query novelsQuery($novelsSort: String, $novelsCount: Float) {
    ...novelList
  }
`;

type Props = {} & RouteComponentProps;

function List(props: Props): ReactElement {
  const { props: relayProps, error, retry } = useQuery<novelsQuery>(novelsRelayQuery, {
    novelsSort: 'title',
    novelsCount: 50
  });

  if (error) return <div>{error.message}</div>;
  if (relayProps)
    return (
      <S.NovelsContainer>
        <S.NovelsWrapper>
          <S.NovelTitle>Novel List</S.NovelTitle>
          <NovelList novels={relayProps} />
        </S.NovelsWrapper>
        <S.NovelsSidePanel />
      </S.NovelsContainer>
    );

  return <Loader type={LoaderType.Ring} />;
}

export default List;
