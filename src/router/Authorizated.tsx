import React, { FC, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { RoutesTree } from './routes'

const Authorizated: FC = () => {
  return (
    <Routes>
      <Route path={RoutesTree.main.path} element={RoutesTree.main.component} />

      <Route
        path="*"
        element={<Navigate to={RoutesTree.main.path} replace />}
      />
    </Routes>
  )
}

export default Authorizated
