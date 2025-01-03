import { gql } from '@apollo/client'

import { REPOSITORY_FRAGMENT } from '../fragments/repository.fragment'

export const GET_VIEWER_REPOSITORIES = gql`
  ${REPOSITORY_FRAGMENT}
  query GetViewerRepositories($first: Int, $last: Int, $after: String, $before: String) {
    viewer {
      repositories(
        first: $first
        last: $last
        after: $after
        before: $before
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        nodes {
          ...RepositoryFields
        }
      }
    }
  }
`
