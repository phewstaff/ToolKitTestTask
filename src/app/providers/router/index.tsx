import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routesConfig } from './config'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routesConfig).map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
