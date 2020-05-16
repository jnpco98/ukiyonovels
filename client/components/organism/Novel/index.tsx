import React from 'react';
import Layout from '@layout/Layout';
import Text from '@components/atom/Text';
import { TabbedList } from '@components/molecule/Card/style';
import * as S from './style';

export interface NovelContent {
  title: string;
  description: string;
  type: string;
  genres: string[];
  tags: string[];
  origins: string[];
  authors: string[];
  artists: string[];
  year: string;
  status: string;
  alternativeNames: string[];
  relatedNovels: string[];
  recommendedNovels: string[];
  coverImage: string;
}

type Props = {
  className?: string;
  content: NovelContent;
}

function Novel(props: Props) {
  const { className, content } = props;
  const { title, description, type, genres, tags, origins, authors, artists, year, status, alternativeNames, relatedNovels, recommendedNovels, coverImage } = content;
  
  return(
    <div className={className}>
      <S.Heading>{title}</S.Heading>
      <Layout layoutType="secondaryPrimary">
        <Layout gutterRight>
          <S.FeaturedImageWrapper>
            <S.FeaturedImage src={coverImage} />
          </S.FeaturedImageWrapper>
          <TabbedList heading="Type" items={[type]}/>
          <TabbedList heading="Genre" items={genres}/>
          <TabbedList heading="Tags" items={tags}/>
          <TabbedList heading="Origin" items={origins}/>
          <TabbedList heading="Authors" items={authors}/>
          <TabbedList heading="Artists" items={artists}/>
          <TabbedList heading="Year" items={[year]}/>
          <TabbedList heading="Status" items={[status]}/>
        </Layout>
        <Layout>
          <S.SubHeading>Description</S.SubHeading>
          <Text>{description}</Text>
          <TabbedList heading="Alternative Names" items={alternativeNames}/>
          <TabbedList heading="Related Novels" items={relatedNovels}/>
          <TabbedList heading="Recommended Novels" items={recommendedNovels}/>
        </Layout>
      </Layout>
    </div>
  );
}

export default Novel;