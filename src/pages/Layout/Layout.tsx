import React from 'react'
import Topbar from './Topbar'
import { LayoutWrapper, ContentWrapper, ContentInnerWrapper } from './styled'

const Layout = ({ children }: any) => {
  return (
    <>
      <Topbar />
      <LayoutWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutWrapper>
    </>
  )
}

export default Layout
