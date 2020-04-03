import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { novelCardList_novels$key } from '../../../__generated__/novelCardList_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

const fragmentSpec = graphql`
  fragment novelCardList_novels on Query {
    novelCardList: novels(first: 10, sortKey: "lastModified") @connection(key: "novel_novelCardList") {
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
  novelCardList: novelCardList_novels$key;
  className?: string;
  headingText?: string;
  buttonText: string;
};

function NovelCardList(props: Props) {
  const { className, headingText, buttonText } = props;
  const { novelCardList } = useFragment(fragmentSpec, props.novelCardList);

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
