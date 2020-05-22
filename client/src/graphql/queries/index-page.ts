import gql from 'graphql-tag';

export const NOVEL_SORT_KEY = {
  title: 'title',
  createdAt: 'createdAt',
  lastModified: 'lastModified',
  views: 'views'
}

export const indexPage = gql`
  query indexPage {
    novelsByMostPopular:novels(first: 5, sortKey: "${NOVEL_SORT_KEY.views}") {
      edges {
        node {
          id
          slug
          title
          tags
          genres
          origins
          coverImage
        }
      }
    }
    novelsByLastUpdated:novels(first: 5, sortKey: "${NOVEL_SORT_KEY.lastModified}") {
      edges {
        node {
          id
          slug
          title
          tags
          genres
          origins
          coverImage
        }
      }
    }
    novelsByDate:novels(first: 5, sortKey: "${NOVEL_SORT_KEY.createdAt}") {
      edges {
        node {
          id
          slug
          title
          tags
          genres
          origins
          coverImage
        }
      }
    }
  }
`;