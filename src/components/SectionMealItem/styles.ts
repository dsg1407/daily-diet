import styled, { css } from 'styled-components/native'
import { Circle } from 'phosphor-react-native'

type IconProps = {
  type: 'yes' | 'no'
}

export const Container = styled.TouchableOpacity`
  width: 100%;

  min-height: 49px;
  max-height: 49px;

  padding: 14px 12px;
  margin: 8px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;
  border: 1px ${({ theme }) => theme.COLORS.BASE.GRAY_5};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY.XS}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_4};
`

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const DietIcon = styled(Circle).attrs<IconProps>(({ theme, type }) => ({
  size: 14,
  weight: 'fill',
  color:
    type === 'yes'
      ? theme.COLORS.PRODUCT.GREEN_MID
      : theme.COLORS.PRODUCT.RED_MID,
}))``
