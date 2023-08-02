import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layout/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
    </Routes>
  )
}
