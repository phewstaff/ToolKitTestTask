import { gql } from '@apollo/client'

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFields on Repository {
    id
    owner {
      login
    }
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
`
