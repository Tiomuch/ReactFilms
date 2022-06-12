import React, { FC, useEffect, useState } from 'react'
import { Divider } from '../../components'
import { Assets } from '../../assets'
import { Container } from './styled'
import { RoutesTree } from '../../router'
import { useTypedSelector } from '../../hooks'
import { MainTable } from './components'
import { getUserSelector } from '../../store'

const CashFees: FC = () => {
  const { user } = useTypedSelector(getUserSelector)

  return (
    <Container>
      <MainTable />
    </Container>
  )
}

export default CashFees
