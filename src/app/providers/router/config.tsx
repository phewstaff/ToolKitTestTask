import { RepoDetailsPage, RepoListPage } from '@/pages'

import { ROUTES, RoutesConfig } from './routes'

export const routesConfig: RoutesConfig = {
  home: {
    path: ROUTES.home,
    element: () => <RepoListPage />,
  },
  repoDetails: {
    path: ROUTES.repoDetails,
    element: () => <RepoDetailsPage />,
  },

  notFound: {
    path: ROUTES.notFound,
    element: () => <div>404 Not Found</div>,
  },
}
