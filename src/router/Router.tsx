import React, { FC, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { getUserSelector, initAppAction, refreshTokenAction } from '../store'
// import { useTypedSelector } from '../hooks'
// import { LayoutComponent } from '../pages'
import Authorizated from './Authorizated'
import NoAuthorizated from './NoAuthorizated'

const Router: FC = () => {
  //   const dispatch = useDispatch()
  //   const { token } = useTypedSelector(getUserSelector)

  // useEffect(() => {
  //   dispatch(initAppAction.request())
  // }, [dispatch])

  return (
    <HashRouter basename="/">
      {true ? (
        // <LayoutComponent>
        <Authorizated />
      ) : (
        // </LayoutComponent>
        <NoAuthorizated />
      )}
    </HashRouter>
  )
}

export default Router
