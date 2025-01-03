import { gql } from '@apollo/client'

import { REPOSITORY_FRAGMENT } from '../fragments/repository.fragment'

export const SEARCH_REPOSITORIES = gql`
  ${REPOSITORY_FRAGMENT}
  query SearchRepositories(
    $query: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
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
