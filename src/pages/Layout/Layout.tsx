import React from 'react'
import Topbar from './Topbar'
import { LayoutWrapper, ContentWrapper, ContentInnerWrapper } from './styled'

const Layout = ({ children }: any) => {
  return (
    <LayoutWrapper>
      <Topbar />

      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout
