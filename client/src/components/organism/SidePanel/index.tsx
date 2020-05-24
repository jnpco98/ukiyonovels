import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Layout from '@layout/Layout';
import { SidePanelQuery} from '@schemas/apollo-components';
import { t } from '@utilities/locales';
import { slugify } from '@utilities/string';
import * as S from './style';

const SIDEPANEL_QUERY = gql`
  query SidePanel {
    novelAggregateGenres {
      field
      count
    }
    novelAggregateTags {
      field
      count
    }
    novelAggregateStatus {
      field
      count
    }
  }
`;

function SidePanel() {
  const { searchByGenre, searchByStatus, searchByTags, advancedSearch, report, request } = t(
    'components.sidePanel'
  );

  const { data, loading, error } = useQuery<SidePanelQuery>(SIDEPANEL_QUERY);
  
  return (
    <Layout gutterLeft>
      {loading ? <div>Loading</div> : error ? <div>Error</div> : <S.QuickFilter
        heading={searchByGenre.heading}
        contents={data.novelAggregateGenres.map(g => ({ title: g.field, subtitle: g.count, link: `/genres/${slugify(g.field)}` }))}
        maxHeight="25rem"
      />}
      <S.Text
        heading={advancedSearch.heading}
        subtitle={advancedSearch.subtitle}
        link={advancedSearch.link}
        linkLabel={advancedSearch.linkLabel}
      />
      {loading ? <div>Loading</div> : error ? <div>Error</div> : <S.QuickFilter
        heading={searchByStatus.heading}
        contents={data.novelAggregateStatus.map(g => ({ title: g.field, subtitle: g.count, link: `/genres/${slugify(g.field)}` }))}
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
      {loading ? <div>Loading</div> : error ? <div>Error</div> : <S.QuickFilter
        heading={searchByTags.heading}
        contents={data.novelAggregateTags.map(g => ({ title: g.field, subtitle: g.count, link: `/genres/${slugify(g.field)}` }))}
        maxHeight="25rem"
      />}
    </Layout>
  );
}

export default SidePanel;
