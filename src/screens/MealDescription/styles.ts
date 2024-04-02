import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, Circle } from 'phosphor-react-native'

export type MealTypeProps = {
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  flex: 1;
`
export const HeaderContainer = styled.View<MealProps>`
  width: 100%;
  height: 150px;
  background-color: ${({ theme, type }) =>
    type === 'positive'
      ? theme.COLORS.PRODUCT.GREEN_LIGHT
      : theme.COLORS.PRODUCT.RED_LIGHT};

  align-items: center;
  justify-content: center;
  position: relative;
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BASE.GRAY_2,
}))``

export const BodyContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};

  margin-top: -33px;
  border-radius: 20px;
  padding: 0 24px 24px;
`

export const TextBlock = styled.View`
  width: 100%;
  gap: 8px;
  margin-bottom: 24px;
`

export const ButtonBlock = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 9px;
`

export const TitleS = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const TitleXS = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const MealStatus = styled.View`
  width: 144px;
  height: 34px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const MealStatusText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const MealStatusIcon = styled(Circle).attrs<MealProps>(
  ({ theme, type }) => ({
    size: 8,
    weight: 'fill',
    color:
      type === 'positive'
        ? theme.COLORS.PRODUCT.GREEN_DARK
        : theme.COLORS.PRODUCT.RED_DARK,
  })
)``
