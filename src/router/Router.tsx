import React, { FC, useEffect } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { getUserSelector, initAppAction, refreshTokenAction } from '../store'
// import { useTypedSelector } from '../hooks'
import { LayoutComponent } from '../pages'
import Authorizated from './Authorizated'
import NoAuthorizated from './NoAuthorizated'
import { useTypedSelector } from '../hooks'
import { getUserSelector, initAppAction } from '../store'

const Router: FC = () => {
    const dispatch = useDispatch()
    const { token } = useTypedSelector(getUserSelector)

  useEffect(() => {
    dispatch(initAppAction.request())
  }, [dispatch])

  return (
    <HashRouter basename="/">
      {token ? (
        <LayoutComponent>
          <Authorizated />
        </LayoutComponent>
      ) : (
        <NoAuthorizated />
      )}
    </HashRouter>
  )
}

export default Router
