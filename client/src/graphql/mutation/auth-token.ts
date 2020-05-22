import gql from 'graphql-tag';

export const tokenCreate = gql`
  mutation tokenCreate($data: TokenCreateInput!) {
    tokenCreate(data: $data) {
      accessToken
      refreshToken
    }
  }
`;