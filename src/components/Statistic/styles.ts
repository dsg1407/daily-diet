import styled, { css } from 'styled-components/native'

type ContainerProps = {
  type?: 'positive' | 'negative'
}

export const Container = styled.View<ContainerProps>`
  /* width: 100%; */
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};

  ${({ theme, type }) =>
    type === 'positive' &&
    css`
      background-color: ${theme.COLORS.PRODUCT.GREEN_LIGHT};
    `};
  ${({ theme, type }) =>
    type === 'negative' &&
    css`
      background-color: ${theme.COLORS.PRODUCT.RED_LIGHT};
    `};
`
