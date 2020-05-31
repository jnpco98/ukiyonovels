import React from 'react';
import Layout from '@layout/Layout';
import { useNovelAggregateGenresQuery, useNovelAggregateTagsQuery, useNovelAggregateStatusQuery } from '@schemas/apollo-queries';
import { t } from '@utilities/locales';
import * as S from './style';

function SidePanel() {
  const { searchByGenre, searchByStatus, searchByTags, advancedSearch, report, request } = t(
    'components.sidePanel'
  );

  const { data: genres, loading: genresLoading, error: genresError } = useNovelAggregateGenresQuery();
  const { data: tags, loading: tagsLoading, error: tagsError } = useNovelAggregateTagsQuery();
  const { data: status, loading: statusLoading, error: statusError } = useNovelAggregateStatusQuery();
  
  return (
    <Layout gutterLeft>
      {genresLoading ? <div>Loading genres</div> : genresError ? <div>Error</div> : <S.QuickFilter
        heading={searchByGenre.heading}
        contents={genres.data.map(g => ({ key: g.field, title: g.field, subtitle: g.count, link: { href: '/novels/[typeSlug]/[filterSlug]', as: `/novels/genre/${g.field}`} }))}
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
        contents={status.data.map(g => ({ key: g.field, title: g.field, subtitle: g.count, link: { href: '/novels/[typeSlug]/[filterSlug]', as: `/novels/status/${g.field}`} }))}
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
        contents={tags.data.map(g => ({ key: g.field, title: g.field, subtitle: g.count, link: { href: '/novels/[typeSlug]/[filterSlug]', as: `/novels/tagged/${g.field}`} }))}
        maxHeight="25rem"
      />}
    </Layout>
  );
}

export default SidePanel;
