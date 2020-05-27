import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Layout from '@layout/Layout';
import { SidePanelGenresQuery, SidePanelTagsQuery, SidePanelStatusQuery, SidePanelGenresQueryVariables, SidePanelTagsQueryVariables, SidePanelStatusQueryVariables } from '@schemas/apollo-components';
import { t } from '@utilities/locales';
import { slugify } from '@utilities/string';
import * as S from './style';

const SIDEPANEL_GENRES_QUERY = gql`
  query SidePanelGenres {
    novelAggregateGenres { field, count }
  }
`;

const SIDEPANEL_TAGS_QUERY = gql`
  query SidePanelTags {
    novelAggregateTags { field, count }
  }
`;

const SIDEPANEL_STATUS_QUERY = gql`
  query SidePanelStatus {
    novelAggregateStatus { field, count }
  }
`;

function SidePanel() {
  const { searchByGenre, searchByStatus, searchByTags, advancedSearch, report, request } = t(
    'components.sidePanel'
  );

  const { data: genres, loading: genresLoading, error: genresError } = useQuery<SidePanelGenresQuery, SidePanelGenresQueryVariables>(SIDEPANEL_GENRES_QUERY);
  const { data: tags, loading: tagsLoading, error: tagsError } = useQuery<SidePanelTagsQuery, SidePanelTagsQueryVariables>(SIDEPANEL_TAGS_QUERY);
  const { data: status, loading: statusLoading, error: statusError } = useQuery<SidePanelStatusQuery, SidePanelStatusQueryVariables>(SIDEPANEL_STATUS_QUERY);
  
  return (
    <Layout gutterLeft>
      {genresLoading ? <div>Loading genres</div> : genresError ? <div>Error</div> : <S.QuickFilter
        heading={searchByGenre.heading}
        contents={genres.novelAggregateGenres.map(g => ({ title: g.field, subtitle: g.count, link: `/genres/${slugify(g.field)}` }))}
        maxHeight="25rem"
      />}
      <S.Text
        heading={advancedSearch.heading}
        subtitle={advancedSearch.subtitle}
        link={advancedSearch.link}
        linkLabel={advancedSearch.linkLabel}
      />
      {statusLoading ? <div>Loading status</div> : statusError ? <div>Error</div> : <S.QuickFilter
        heading={searchByStatus.heading}
        contents={status.novelAggregateStatus.map(g => ({ title: g.field, subtitle: g.count, link: `/genres/${slugify(g.field)}` }))}
        maxHeight="25rem"
      />}
      <S.Text
        heading={report.heading}
        subtitle={report.subtitle}
        link={report.link}
        linkLabel={report.linkLabel}
      />
      <S.Text
        heading={request.heading}
        subtitle={request.subtitle}
        link={request.link}
        linkLabel={request.linkLabel}
      />
      {tagsLoading ? <div>Loading tags</div> : tagsError ? <div>Error</div> : <S.QuickFilter
        heading={searchByTags.heading}
        contents={tags.novelAggregateTags.map(g => ({ title: g.field, subtitle: g.count, link: `/genres/${slugify(g.field)}` }))}
        maxHeight="25rem"
      />}
    </Layout>
  );
}

export default SidePanel;
