import styled, { css } from 'styled-components/native'
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

type Props = {
  type?: 'add' | 'edit' | 'delete'
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'delete' ? theme.COLORS.BASE.GRAY_7 : theme.COLORS.BASE.GRAY_2};

  border: ${({ type }) => type === 'delete' && `1px`};
  border-color: ${({ theme, type }) =>
    type === 'delete' && theme.COLORS.BASE.GRAY_1};

  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'delete'
      ? theme.COLORS.BASE.GRAY_1
      : theme.COLORS.BASE.WHITE};
  `}
`

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.BASE.WHITE,
}))``

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.BASE.WHITE,
}))``

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.BASE.GRAY_1,
}))``
