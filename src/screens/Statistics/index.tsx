import { useNavigation } from '@react-navigation/native'

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

export function Statistics() {
  const navigation = useNavigation()

  return (
    <Container>
      <HeaderContainer type="positive">
        <BackButton onPress={() => navigation.navigate('home')}>
          <BackIcon type="positive" />
        </BackButton>
        <Highlight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          size="G"
        />
      </HeaderContainer>
      <BodyContainer>
        <Title>Estatísticas gerais</Title>
        <StatisticsBlock>
          <StatisticsRow>
            <Statistic
              title="4"
              subtitle="melhor sequência de pratos dentro da dieta"
              size="M"
            />
          </StatisticsRow>
          <StatisticsRow>
            <Statistic title="109" subtitle="refeições registradas" size="M" />
          </StatisticsRow>
          <StatisticsRow>
            <Statistic
              title="32"
              subtitle="refeições dentro da dieta"
              size="M"
              type="positive"
            />
            <Statistic
              title="77"
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
