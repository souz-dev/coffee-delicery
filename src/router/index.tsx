import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layout/defaultLayout'
import { Home } from '../pages/home'
import { CompleteOrderPage } from '../pages/checkout'
import { Success } from '@pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
