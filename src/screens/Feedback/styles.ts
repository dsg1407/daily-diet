import { Button } from '@/components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type TitleProps = {
  type: 'positive' | 'negative'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const TextView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'positive'
      ? theme.COLORS.PRODUCT.GREEN_DARK
      : theme.COLORS.PRODUCT.RED_DARK};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_1};
    text-align: center;
  `}
`

export const Span = styled(Subtitle)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Illustration = styled.Image`
  max-width: 224px;
  height: 288px;

  margin: 40px 0 32px;
`
export const HomeButton = styled(Button)`
  width: 191px;
`
