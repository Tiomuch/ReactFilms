import React, { FC, useEffect, useState } from 'react'
import { Divider } from '../../components'
import { Assets } from '../../assets'
import { Container } from './styled'
import { RoutesTree } from '../../router'
import { useTypedSelector } from '../../hooks'
import { MainTable } from './components'

const MainPage: FC = () => {
  const { user } = useTypedSelector(state => state.user)

  return (
    <Container>
      <MainTable />
    </Container>
  )
}

export default MainPage
