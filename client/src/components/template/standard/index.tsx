import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import * as S from './style';
import DynamicHTML from '../../molecule/dynamic-html';
import { standardQuery, standardQueryVariables } from '../../../__generated__/standardQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';
import PageNotFound from '../404';

type Props = RouteComponentProps<{ slug: string }>;

const standardPageRelayQuery = graphql`
  query standardQuery($slug: String!) {
    article: articleBySlug(slug: $slug) {
      title
      content
    }
  }
`;

function StandardPage(props: Props): ReactElement {
  const { match } = props;
  const { slug } = match.params;

  const variables: standardQueryVariables = { slug };
  const { props: relayProps, error, retry } = useQuery<standardQuery>(standardPageRelayQuery, variables);

  if (error) return <div>{error.message}</div>;
  if (relayProps) {
    if (!relayProps.article) return <PageNotFound />;
    const { title, content } = relayProps.article;
    return (
      <S.StandardPageContainer className={`page_${slug}`}>
        <S.StandardPageTitle>{title}</S.StandardPageTitle>
        <DynamicHTML HTMLString={content} />
      </S.StandardPageContainer>
    );
  }
  return <Loader type={LoaderType.Ring} />;
}

export default StandardPage;
