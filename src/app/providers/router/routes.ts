export type AppRoute = {
  path: string
  element: () => JSX.Element
  children?: AppRoute[]
}

export type RoutesConfig = Record<
  keyof typeof ROUTES,
  {
    path: string
    element: () => JSX.Element
  }
>

export const ROUTES = {
  home: '/',
  repoDetails: '/repository/:owner/:name',
  notFound: '*',
} as const

export type AppRoutes = keyof typeof ROUTES
