import {
  TShadowConstructorArgs,
  TFlexConstructorArgs,
  TFontConstructorArgs,
  TCSSConstructor,
  TBorderConstructorArgs,
} from './types'

export const FONT: TCSSConstructor<TFontConstructorArgs> = ({
  color = 'black',
  family = 'Lato, sans-serif',
  weight = '400',
  size = '10px',
  align = 'left',
}) => {
  return `
    text-align: ${align};
    font-family: ${family};
    font-weight: ${weight};
    font-size: ${size};
    color: ${color};
  `
}

export const FLEX: TCSSConstructor<TFlexConstructorArgs> = ({
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'wrap',
}) => {
  return `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
  `
}

export const SHADOW: TCSSConstructor<TShadowConstructorArgs> = ({
  x = 0,
  y = 0,
  blur = 6,
  color = '#0000000F',
}) => {
  return `
    box-shadow: ${x}px ${y}px ${blur}px ${color};
  `
}

export const BORDER: TCSSConstructor<TBorderConstructorArgs> = ({
  width = 1,
  style = 'solid',
  color = '#DFDFDF',
}) => {
  return `
    border: ${width}px ${style} ${color};
  `
}
