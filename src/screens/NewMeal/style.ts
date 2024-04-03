import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
`
export const HeaderContainer = styled.View`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};

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
export const FormBlock = styled.View`
  width: 100%;
  flex: 1;
  gap: 24px;
`
export const FormRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const FormGroup = styled.View`
  flex: 1;
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const InputField = styled(TextInput)`
  width: 100%;
  padding: 14px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}

  border-radius: 6px;
  border: 1px ${({ theme }) => theme.COLORS.BASE.GRAY_5};
`

export const DescriptionField = styled(InputField)`
  height: 120px;
`
