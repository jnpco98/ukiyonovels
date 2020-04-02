import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useQuery, RenderProps } from 'relay-hooks';

import * as S from './style';
import { RouteComponentProps } from 'react-router-dom';
import qs from 'qs';
import { searchQuery, searchQueryVariables } from '../../../__generated__/searchQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';
import NovelThumbnail from '../../molecule/novel-thumbnail';

export const searchRelayQuery = graphql`
  query searchQuery(
    $novelWhere: NovelWhere
    $novelSearchCount: Float
  ) {
    search: novels (
        where: $novelWhere
        first: $novelSearchCount
    ) @connection(key: "novels_search") {
      edges {
          node {
              id
            ...novelThumbnail_novel
          }
      }
    }
  }
`;

function renderNovels(renderProps: RenderProps<searchQuery>) {
    const { props: relayProps, error, retry } = renderProps;
    if(error) return <div>{error.message}</div>
    if(relayProps) {
        const { search } = relayProps;
        return <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
            { search.edges.map(({ node }) => <NovelThumbnail key={node.id} novel={node}/>) }
        </div>
    }
    return <Loader type={LoaderType.Ring}/>
}

type Props = RouteComponentProps;

function Search (props: Props) {
    const { query } =  qs.parse(props.location.search, { ignoreQueryPrefix: true }) as { query?: string };

    const variables: searchQueryVariables = { 
        novelSearchCount: 40, 
        novelWhere: { OR: [
            { title: { contains: query } },
            { description: { contains: query } } 
        ] } 
    };
    const queryResult = useQuery<searchQuery>(searchRelayQuery, variables);
    return (
        <S.SearchContainer>
            <S.SearchWrapper>
                <S.SearchTitle>Search Results</S.SearchTitle>
                    {query && typeof query === 'string' ?
                        renderNovels(queryResult)  : <p>No results found</p>
                    }
            </S.SearchWrapper>
            <S.SearchSidePanel/>
        </S.SearchContainer>
    );
};

export default Search;