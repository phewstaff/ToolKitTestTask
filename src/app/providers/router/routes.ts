export type AppRoute = {
  path: string
  element: () => JSX.Element
  children?: AppRoute[]
}

export type RoutesConfig = Record<keyof typeof ROUTES, AppRoute>

export const ROUTES = {
  home: '/',
  repoDetails: '/repo/:owner/:name',
  notFound: '*',
} as const
