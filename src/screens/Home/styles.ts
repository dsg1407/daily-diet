import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

type StatisticProps = {
  type: 'positive' | 'negative'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  padding: 24px;
`
export const ImageBlock = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`

export const StatisticFrame = styled.TouchableOpacity<StatisticProps>`
  width: 100%;
  height: 102px;
  margin: 32px 0 40px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'negative'
      ? theme.COLORS.PRODUCT.RED_LIGHT
      : theme.COLORS.PRODUCT.GREEN_LIGHT};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const StatisticIcon = styled(ArrowUpRight).attrs<StatisticProps>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === 'negative'
        ? theme.COLORS.PRODUCT.RED_DARK
        : theme.COLORS.PRODUCT.GREEN_DARK,
  })
)`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
  margin-bottom: 8px;
`

export const MealSectionHeader = styled.Text`
  margin-top: 32px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`
