import { useNavigation, useRoute } from '@react-navigation/native'
import { MealProps } from '@/screens/Home'

import {
  Container,
  HeaderContainer,
  BodyContainer,
  BackButton,
  BackIcon,
  Title,
  StatisticsBlock,
  StatisticsRow,
} from './styles'

import { Statistic } from '@/components/Statistic'
import { Highlight } from '@/components/Highlight'

type RouteParams = {
  positiveMeals: number
  totalMeals: number
  sequence: number
  positiveIndex: number
}

export function Statistics() {
  const navigation = useNavigation()
  const route = useRoute()
  const { positiveMeals, totalMeals, sequence, positiveIndex } =
    route.params as RouteParams

  const percent = totalMeals === 0 ? 0 : positiveMeals / totalMeals

  return (
    <Container>
      <HeaderContainer
        type={percent >= positiveIndex ? 'positive' : 'negative'}
      >
        <BackButton onPress={() => navigation.navigate('home')}>
          <BackIcon type={percent >= positiveIndex ? 'positive' : 'negative'} />
        </BackButton>
        <Highlight
          title={percent.toLocaleString('pt-BR', {
            style: 'percent',
            maximumFractionDigits: 2,
          })}
          subtitle="das refeições dentro da dieta"
          size="G"
        />
      </HeaderContainer>
      <BodyContainer>
        <Title>Estatísticas gerais</Title>
        <StatisticsBlock>
          <StatisticsRow>
            <Statistic
              title={sequence.toString()}
              subtitle="melhor sequência de pratos dentro da dieta"
              size="M"
            />
          </StatisticsRow>
          <StatisticsRow>
            <Statistic
              title={totalMeals.toString()}
              subtitle="refeições registradas"
              size="M"
            />
          </StatisticsRow>
          <StatisticsRow>
            <Statistic
              title={positiveMeals.toString()}
              subtitle="refeições dentro da dieta"
              size="M"
              type="positive"
            />
            <Statistic
              title={(totalMeals - positiveMeals).toString()}
              subtitle="refeições fora da dieta"
              size="M"
              type="negative"
            />
          </StatisticsRow>
        </StatisticsBlock>
      </BodyContainer>
    </Container>
  )
}
