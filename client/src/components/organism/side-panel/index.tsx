import React, { ReactElement } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery, RenderProps } from 'relay-hooks';

import * as S from './style';
import { sidePanelQuery, sidePanelQueryVariables } from '../../../__generated__/sidePanelQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';
import { sidePanel } from '../../../settings/config/settings.json';

export const sidePanelRelayQuery = graphql`
  query sidePanelQuery(
    $sidePanelNovelCount: Float
    $sidePanelNovelSort: String
    $sidePanelNovelReverse: Boolean
    $sidePanelNovelFilter: NovelWhere
  ) {
    popularNovels: novels(
      first: $sidePanelNovelCount
      sortKey: $sidePanelNovelSort
      reverse: $sidePanelNovelReverse
      where: $sidePanelNovelFilter
    ) @connection(key: "novel_popularNovels") {
      edges {
        node {
          slug
          title
          rating
        }
      }
    }
    genres: novelAggregateGenres {
      field
      count
    }
    status: novelAggregateStatus {
      field
      count
    }
    types: novelAggregateTypes {
      field
      count
    }
    tags: novelAggregateTags {
      field
      count
    }
  }
`;

type Classification = 'genres' | 'status' | 'types' | 'tags';

type Props = {
  className?: string;
  classifications?: Classification[];
};

function renderQuickSearch(
  renderProps: RenderProps<sidePanelQuery>,
  classifications: Classification[]
): ReactElement | ReactElement[] {
  const { props: relayProps, error, retry } = renderProps;

  return classifications.map(c => (
    <S.SidePanelQuickSearch
      key={c}
      headingText={`Search by ${c}`}
      contents={relayProps[c].map(query => ({
        title: query.field,
        count: query.count,
        // eslint-disable-next-line no-nested-ternary
        link: `/novels/${c === 'genres' ? 'genre' : c === 'types' ? 'type' : c === 'tags' ? 'tagged' : ''}/${
          query.field
        }`
      }))}
    />
  ));
}

function SidePanel(props: Props): ReactElement {
  const { className, classifications = ['genres', 'status', 'types', 'tags'] } = props;
  const variables: sidePanelQueryVariables = {
    sidePanelNovelCount: 10,
    sidePanelNovelSort: 'rating',
    sidePanelNovelReverse: true,
    sidePanelNovelFilter: { AND: [{ rating: { gt: 0 } }] }
  };
  const renderProps = useQuery<sidePanelQuery>(sidePanelRelayQuery, variables);
  const { props: relayProps, error, retry } = renderProps;

  if (error) return <div>{error.message}</div>;
  if (relayProps)
    return (
      <S.SidePanelContainer className={className}>
        <S.SidePanelRatings
          headingText={sidePanel.popularNovels.headingText}
          contents={relayProps.popularNovels.edges.map(({ node }) => ({
            title: node.title,
            rating: node.rating,
            link: `/novel/${node.slug}`
          }))}
        />
        {renderQuickSearch(renderProps, classifications as Classification[])}
      </S.SidePanelContainer>
    );
  return <Loader type={LoaderType.Ring} />;
}

export default SidePanel;
