import { RouterProvider } from 'react-router-dom'

import { router } from './pages/Routes/router'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
