import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

type StatisticProps = {
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  flex: 1;
`
export const HeaderContainer = styled.View<StatisticProps>`
  width: 100%;
  height: 200px;
  padding: 24px;
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

export const BackIcon = styled(ArrowLeft).attrs<StatisticProps>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === 'positive'
        ? theme.COLORS.PRODUCT.GREEN_DARK
        : theme.COLORS.PRODUCT.RED_DARK,
  })
)``

export const BodyContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};

  margin-top: -33px;
  border-radius: 20px;
  align-items: center;
  padding: 0 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};

    margin-bottom: 23px;
  `}
`
export const StatisticsBlock = styled.View`
  width: 100%;
  gap: 12px;
`

export const StatisticsRow = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 12px;
`
