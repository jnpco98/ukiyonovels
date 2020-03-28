import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { novelCardList_novels$key } from '../../../__generated__/novelCardList_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

const fragmentSpec = graphql`
  fragment novelCardList_novels on NovelConnection {
    edges {
      node {
        id
        ...novelCard_novel
      }
    }
  }
`;

type Props = {
  novels: novelCardList_novels$key;
  className?: string;
  headingText?: string;
  buttonText: string;
};

function NovelCardList(props: Props) {
  const { edges } = useFragment(fragmentSpec, props.novels);
  const { className, headingText, buttonText } = props;

  return (
    <S.NovelCardListContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      {edges.map(({ node }) => (
        <S.NovelCardListItem key={node.id} buttonText={buttonText} novel={node} />
      ))}
    </S.NovelCardListContainer>
  );
}

export default NovelCardList;
