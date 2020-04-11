import React, { useState } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment, usePagination } from 'relay-hooks';

import { novelCardList_novels$key } from '../../../__generated__/novelCardList_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';
import Button, { ButtonType } from '../../atom/button';
import { novelsRelayCardQuery } from '../../template/novels';
import Loader, { LoaderType } from '../../atom/loaders';

export const DEFAULT_NOVEL_CARD_LIST_VARIABLES = {
  novelsCount: 5,
  novelsSort: 'title'
};

const fragmentSpec = graphql`
  fragment novelCardList_novels on Query
    @argumentDefinitions(
      #dfq did this come from
      after: { type: "String" }
      sortKey: { type: "String" }
      first: { type: "Float" }
      where: { type: "NovelWhere" }
      reverse: { type: "Boolean" }
    ) {
    novelCardList: novels(
      first: $novelsCount
      after: $novelAfter
      sortKey: $novelsSort
      where: $novelWhere
      reverse: $novelReverse
    ) @connection(key: "novels_novelCardList") {
      edges {
        node {
          id
          slug
          ...novelCard_novel
        }
      }
    }
  }
`;

// fragment variables come from the main query fragment, 5, count comes from the loadmore connection config
const connectionConfig = {
  getVariables(props: any, { count, cursor }: { [key: string]: any }, fragmentVariables: any) {
    console.log(fragmentVariables);
    const params = {
      novelsCount: count,
      novelsSort: fragmentVariables.novelsSort,
      novelWhere: fragmentVariables.novelWhere,
      novelAfter: cursor
    };
    Object.keys(params).forEach(k => {
      if ((params as any)[k] === null || (params as any)[k] === undefined) delete (params as any)[k];
    });
    return params;
  },
  query: graphql`
    query novelCardListQuery(
      #copy from base query - definition
      $novelsSort: String
      $novelsCount: Float
      $novelWhere: NovelWhere
      $novelReverse: Boolean
      $novelAfter: String
    ) {
      # copy from fragment
      ...novelCardList_novels
        @arguments(
          first: $novelsCount
          sortKey: $novelsSort
          where: $novelWhere
          reverse: $novelReverse
          after: $novelAfter
        )
    }
  `
};

type Props = {
  novelsKey: novelCardList_novels$key;
  className?: string;
  headingText?: string;
  buttonText: string;
};

function NovelCardList(props: Props) {
  const { novelsKey } = props;
  const { className, headingText, buttonText } = props;
  const [loading, setLoading] = useState(false);

  const [result, { isLoading, hasMore, loadMore }] = usePagination(fragmentSpec, novelsKey);

  return (
    <S.NovelCardListContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      {result.novelCardList.edges.map(({ node }) => (
        <S.NovelCardListItem key={node.id} buttonText={buttonText} novel={node} />
      ))}

      {loading && <Loader type={LoaderType.Ring} />}

      <Button
        buttonType={ButtonType.Info}
        onClick={() => {
          if (!hasMore() || isLoading()) {
            return;
          }
          setLoading(true);

          loadMore(
            {
              // direction: 'forward',
              ...connectionConfig
            },
            10,
            // eslint-disable-next-line no-console
            () => {
              setLoading(false);
            },
            null
          );
        }}
      >
        Loadmore
      </Button>
    </S.NovelCardListContainer>
  );
}
// <Loader type={LoaderType.Ring} />;

export default NovelCardList;
