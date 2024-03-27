import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Circle } from 'phosphor-react-native'

export type FilterStyleProps = {
  type: 'Sim' | 'Não'
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  height: 50px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};

  ${({ theme, isActive, type }) =>
    isActive &&
    type === 'Sim' &&
    css`
      background-color: ${theme.COLORS.PRODUCT.GREEN_LIGHT};
      border: 1px solid ${theme.COLORS.PRODUCT.GREEN_DARK};
    `}

  ${({ theme, isActive, type }) =>
    isActive &&
    type === 'Não' &&
    css`
      background-color: ${theme.COLORS.PRODUCT.RED_LIGHT};
      border: 1px solid ${theme.COLORS.PRODUCT.RED_DARK};
    `}
`

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const Icon = styled(Circle).attrs<FilterStyleProps>(
  ({ theme, type }) => ({
    size: 8,
    weight: 'fill',
    color:
      type === 'Sim'
        ? theme.COLORS.PRODUCT.GREEN_DARK
        : theme.COLORS.PRODUCT.RED_DARK,
  })
)``
