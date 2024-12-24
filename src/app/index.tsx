import { StrictMode } from 'react'

import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '@/shared/api'
import { MainLayout } from '@/shared/components/layout'

import { AppRouter } from './providers/router'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <MainLayout title="GitHub Repository Explorer">
          <AppRouter />
        </MainLayout>
      </ApolloProvider>
    </StrictMode>
  )
}
