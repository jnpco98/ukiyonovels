import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import * as S from './style';
import Row from '../../atom/row';
import Text, { TextType } from '../../atom/text';
import { novelList$key } from '../../../__generated__/novelList.graphql';

export const novelsListFragmentSpec = graphql`
  fragment novelList on Query {
    novels(first: $novelsCount, sortKey: $novelsSort) @connection(key: "novel_novels") {
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
  novels: novelList$key;
};

function NovelList(props: Props) {
  const { className, headingText } = props;
  const { novels } = useFragment(novelsListFragmentSpec, props.novels);
  return (
    <S.NovelListContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      {novels.edges.map(({ node }) => (
        <Row key={node.id} link={'novel/' + node.slug} title={node.title} />
      ))}
    </S.NovelListContainer>
  );
}

export default NovelList;
