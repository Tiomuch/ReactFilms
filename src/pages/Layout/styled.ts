import { Link, NavLink as NavLinks } from 'react-router-dom'
import styled from 'styled-components'
import { FLEX, FONT, SHADOW } from '../../utils'
import { COLORS } from '../../assets'

export const TopbarWrapper = styled.div`
  // width: 100%;
  padding: 5px 60px;

  height: 64px;

  background-color: ${COLORS.lightGreen};

  // ${SHADOW({})};

  // ${FLEX({ align: 'center', justify: 'space-between', direction: 'row' })}
`

export const RightPart = styled.div`
  ${FLEX({ direction: 'row', wrap: 'nowrap', justify: 'flex-end' })}
`

export const LogoIcon = styled.img`
  width: 40px;
  height: 40px;
`

export const MiniTopIcon = styled.img`
  width: 24px;
  height: 24px;

  cursor: pointer;

  /* border-radius: 50%; */
`

export const Logo = styled(Link)`
  ${FONT({
    size: '20px',
    weight: '300',
    align: 'center',
    color: COLORS.black,
  })}
`

export const ChosenPathText = styled.p`
  ${FONT({
    size: '18px',
    weight: '400',
    align: 'center',
    color: COLORS.darkYellow,
  })}
`

export const DefaultPathText = styled.p`
  ${FONT({
    size: '18px',
    weight: '300',
    align: 'center',
    color: COLORS.lightBlack,
  })}
`

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

export const ContentWrapper = styled.div`
  width: 100%;
  // height: 100%;
`

export const ContentInnerWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  overflow-y: auto;
`

export const Image = styled.img`
  width: 16px;
  margin-right: 15px;

  cursor: pointer;

  ${FLEX({})}
`

export const SidebarWrapper = styled.div`
  width: 260px;
  height: 100%;

  background: ${COLORS.gray};

  z-index: 1;

  ${SHADOW({ blur: 40 })}

  ${FLEX({ direction: 'column', justify: 'space-between', wrap: 'nowrap' })}
`

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  ${FLEX({ direction: 'column', align: 'flex-end', justify: 'flex-start' })}
`

export const NavLink = styled(NavLinks)`
  width: calc(100% - 30px);
  outline: 0;
  padding: 20px 55px 10px 30px;

  cursor: pointer;

  text-decoration: none;
  transition: 0.15s ease-in-out;

  ${FLEX({ align: 'center', justify: 'flex-start' })}

  ${FONT({ weight: '300', size: '18px', color: COLORS.lightBlack })}

  &.active {
    color: ${COLORS.yellow};
    ${FONT({ weight: '400', size: '18px', color: COLORS.yellow })}
  }
`

export const LogoutBtn = styled.div`
  margin-bottom: 25px;
  padding: 20px 55px 20px 30px;

  transition: 0.15s ease-in-out;
  cursor: pointer;

  ${FONT({ weight: '700', size: '16px', color: COLORS.lightBlue })}

  ${FLEX({})}
`

export const StyledLeftController = styled.div`
  ${FLEX({ direction: 'row', wrap: 'nowrap', justify: 'flex-start' })}
`
