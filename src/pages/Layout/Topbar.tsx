import React from 'react'
import { useDispatch } from 'react-redux'
import { Assets } from '../../assets'
import { Divider } from '../../components'
import { useTypedSelector } from '../../hooks'
import { logoutAction } from '../../store'
import {
  TopbarWrapper,
  Logo,
  LogoIcon,
  RightPart,
  MiniTopIcon,
  StyledLeftController,
} from './styled'

const Topbar = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutAction())
  }

  return (
    <TopbarWrapper>
      <StyledLeftController>
        <LogoIcon src={Assets.CLAPPER_ICON} />

        <Divider width={20} />

        <Logo to={{ pathname: `/main` }}>React Films</Logo>
      </StyledLeftController>

      <Logo to={{ pathname: `/cash-fees` }}>Cash fees</Logo>

      <MiniTopIcon onClick={logout} src={Assets.LOGOUT_ICON} />
    </TopbarWrapper>
  )
}

export default Topbar
