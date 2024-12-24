import { gql } from '@apollo/client'

import { REPOSITORY_FRAGMENT } from '../fragments/repository.fragment'

export const SEARCH_REPOSITORIES = gql`
  ${REPOSITORY_FRAGMENT}
  query SearchRepositories($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        __typename
        ... on Repository {
          ...RepositoryFields
        }
      }
      repositoryCount
    }
  }
`
