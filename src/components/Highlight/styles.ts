import styled, { css } from 'styled-components/native'

type TitleProps = {
  size: 'S' | 'M' | 'G'
}

export const Container = styled.View`
  margin: auto 0;
`

export const Title = styled.Text<TitleProps>`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}

  ${({ theme, size }) =>
    size === 'S' &&
    css`
      font-size: ${theme.FONT_SIZE.TITLE.S}px;
    `}

   ${({ theme, size }) =>
    size === 'M' &&
    css`
      font-size: ${theme.FONT_SIZE.TITLE.M}px;
    `}

   ${({ theme, size }) =>
    size === 'G' &&
    css`
      font-size: ${theme.FONT_SIZE.TITLE.G}px;
    `}
`
export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`
