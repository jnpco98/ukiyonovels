import React from 'react';
import { t } from '@utilities/locales';
import * as S from './style';

function generateList(cnt: number) {
  return Array(cnt).fill(0).map(_ => ({
    title: 'Kaguya-Sama: Love is War',
    subtitle: Math.floor(Math.random() * 4023) + 1,
    link: '/'
  }));
}

function SidePanel() {
  const { searchByGenre, searchByType, advancedSearch, report, request } = t('components.sidePanel');

  return(
    <S.Container gutterLeft>
      <S.QuickFilter heading={searchByGenre.heading} contents={generateList(10)} bulleted/>
      <S.Text heading={advancedSearch.heading} subtitle={advancedSearch.subtitle} link={advancedSearch.link} linkLabel={advancedSearch.linkLabel}/>
      <S.QuickFilter heading={searchByType.heading} contents={generateList(10)} bulleted/>
      <S.Text heading={report.heading} subtitle={report.subtitle} link={report.link} linkLabel={report.linkLabel}/>
      <S.Text heading={request.heading} subtitle={request.subtitle} link={request.link} linkLabel={request.linkLabel}/>
    </S.Container>
  );
}

export default SidePanel;