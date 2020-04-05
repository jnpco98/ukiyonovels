import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { novelCardList_novels$key } from '../../../__generated__/novelCardList_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

export const DEFAULT_NOVEL_CARD_LIST_VARIABLES = {
  novelsCount: 20,
  novelsSort: 'title'
};

const fragmentSpec = graphql`
  fragment novelCardList_novels on Query {
    novelCardList: novels(first: $novelsCount, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {
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

type Props = {
  novelsKey: novelCardList_novels$key;
  className?: string;
  headingText?: string;
  buttonText: string;
};

function NovelCardList(props: Props) {
  const { novelsKey } = props;
  const { className, headingText, buttonText } = props;
  const { novelCardList } = useFragment(fragmentSpec, novelsKey);

  return (
    <S.NovelCardListContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      {novelCardList.edges.map(({ node }) => (
        <S.NovelCardListItem key={node.id} buttonText={buttonText} novel={node} />
      ))}
    </S.NovelCardListContainer>
  );
}

export default NovelCardList;
