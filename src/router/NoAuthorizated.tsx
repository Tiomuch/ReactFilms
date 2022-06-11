import React, { FC, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { RoutesTree } from './routes'

const NoAuthorizated: FC = () => {
  return (
    <Routes>
      <Route
        path={RoutesTree.login.path}
        element={<RoutesTree.login.component />}
      />
      <Route
        path={RoutesTree.register.path}
        element={<RoutesTree.register.component />}
      />
      <Route
        path={RoutesTree.restorePassword.path}
        element={<RoutesTree.restorePassword.component />}
      />

      <Route
        path="*"
        element={<Navigate to={RoutesTree.login.path} replace />}
      />
    </Routes>
  )
}

export default NoAuthorizated
