import React, { ReactElement } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import * as S from './style';
import Row from '../../atom/row';
import Text, { TextType } from '../../atom/text';
import { novelList$key } from '../../../__generated__/novelList.graphql';

export const novelsListFragmentSpec = graphql`
  fragment novelList on Query {
    novels(first: $novelsCount, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse, after: $novelAfter)
      @connection(key: "novel_novels") {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;

type Props = {
  className?: string;
  headingText?: string;
  novelsKey: novelList$key;
};

function NovelList(props: Props): ReactElement {
  const { className, headingText, novelsKey } = props;
  const { novels } = useFragment(novelsListFragmentSpec, novelsKey);
  return (
    <S.NovelListContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      {novels.edges.map(({ node }) => (
        <Row key={node.id} link={`/novel/${node.slug}`} title={node.title} />
      ))}
    </S.NovelListContainer>
  );
}

export default NovelList;
