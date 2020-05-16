import React from 'react';
import Layout from '@layout/Layout';
import Text from '@components/atom/Text';
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
      <S.Wrapper>
        <S.Primary>
          <S.FeaturedImageWrapper>
            <S.FeaturedImage src={coverImage} />
          </S.FeaturedImageWrapper>
          <S.Classifications heading="Type" items={[type]}/>
          <S.Classifications heading="Genre" items={genres}/>
          <S.Classifications heading="Tags" items={tags}/>
          <S.Classifications heading="Origin" items={origins}/>
          <S.Classifications heading="Authors" items={authors}/>
          <S.Classifications heading="Artists" items={artists}/>
          <S.Classifications heading="Year" items={[year]}/>
          <S.Classifications heading="Status" items={[status]}/>
        </S.Primary>
        <Layout>
          <S.Description>
            <S.SubHeading>Description</S.SubHeading>
            <Text>{description}</Text>
          </S.Description>
          <S.Classifications heading="Alternative Names" items={alternativeNames}/>
          <S.Classifications heading="Related Novels" items={relatedNovels}/>
          <S.Classifications heading="Recommended Novels" items={recommendedNovels}/>
        </Layout>
      </S.Wrapper>
    </div>
  );
}

export default Novel;