import React from 'react';
import Layout from '@layout/Layout';
import * as S from './style';

function generateList(cnt: number) {
  return Array(cnt).fill(0).map(_ => ({
    title: 'Kaguya-Sama: Love is War',
    subtitle: Math.floor(Math.random() * 4023) + 1,
    link: '/'
  }));
}

function SidePanel() {
  return(
    <S.Container gutterLeft>
      <S.QuickFilter heading="Search by Genre" contents={generateList(10)} bulleted/>
      <S.Text heading="Advanced Search" subtitle="Search novels by genres, tags, type, author, status, and many more" link="/advanced-search" linkLabel="Advanced Search"/>
      <S.QuickFilter heading="Search by Type" contents={generateList(10)} bulleted/>
      <S.Text heading="Report a problem" subtitle="If you find any bug, or any problems with any of the novels, report using the link below" link="/report" linkLabel="Report a problem"/>
      <S.Text heading="Report a problem" subtitle="If you go any novel requests, go to the link below" link="/request" linkLabel="Got requests?"/>
    </S.Container>
  );
}

export default SidePanel;