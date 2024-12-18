import { gql } from '@apollo/client'

export const GET_VIEWER_REPOS = gql`
  query GetViewerRepos($first: Int!) {
    viewer {
      repositories(first: $first, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          __typename
          id
          name
          description
          url
          stargazerCount
          updatedAt
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      nodes {
        __typename
        ... on Repository {
          id
          name
          description
          url
          stargazerCount
          updatedAt
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`
