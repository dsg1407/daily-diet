import { useRoute, useNavigation } from '@react-navigation/native'
import {
  Container,
  Illustration,
  Span,
  Title,
  Subtitle,
  TextView,
  TitleProps,
  HomeButton,
} from './styles'

import PositiveIllustration from '@/assets/positiveIllustration.png'
import NegativeIllustration from '@/assets/negativeIllustration.png'

type RouteParams = TitleProps

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const { type } = route.params as RouteParams

  return (
    <Container>
      <TextView>
        <Title type={type}>
          {type === 'positive' ? 'Continue assim!' : 'Que pena!'}
        </Title>
        {type === 'positive' ? (
          <Subtitle>
            Você continua
            <Span> dentro da dieta</Span>. Muito bem!
          </Subtitle>
        ) : (
          <Subtitle>
            Você<Span> saiu da dieta</Span> dessa vez, mas continue se
            esforçando e não desista!
          </Subtitle>
        )}
      </TextView>
      <Illustration
        source={
          type === 'positive' ? PositiveIllustration : NegativeIllustration
        }
      />
      <HomeButton
        title="Ir para a página inicial"
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  )
}
