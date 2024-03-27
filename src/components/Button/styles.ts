import styled, { css } from 'styled-components/native'
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};

  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.WHITE};
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
  color: theme.COLORS.BASE.WHITE,
}))``
