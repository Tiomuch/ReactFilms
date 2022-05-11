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

  // const { user } = useTypedSelector(store => store.user)

  const logout = () => {
    // dispatch(logoutAction())
  }

  return (
    <TopbarWrapper>
      <StyledLeftController>
        <LogoIcon src={Assets.CLAPPER_ICON} />

        <Divider width={20} />

        <Logo>React Films</Logo>
      </StyledLeftController>

      <MiniTopIcon src={Assets.PLUS_ICON} />

      <MiniTopIcon onClick={logout} src={Assets.LOGOUT_ICON} />
    </TopbarWrapper>
  )
}

export default Topbar
