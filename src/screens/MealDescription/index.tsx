import { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

import {
  BackButton,
  BackIcon,
  BodyContainer,
  ButtonBlock,
  Container,
  HeaderContainer,
  MealTypeProps,
  MealStatus,
  MealStatusIcon,
  MealStatusText,
  Text,
  TextBlock,
  TitleS,
  TitleXS,
} from './styles'

import { MealProps } from '@/screens/Home'
import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'

type RouteParams = MealTypeProps & {
  mealName: string
}

export function MealDescription() {
  const [mealDescription, setMealDescription] = useState<MealProps>()

  const navigation = useNavigation()
  const route = useRoute()
  const { type, mealName } = route.params as RouteParams

  useEffect(() => {}, [])

  return (
    <Container>
      <HeaderContainer type={type}>
        <BackButton onPress={() => navigation.navigate('home')}>
          <BackIcon />
        </BackButton>
        <Highlight title="Refeição" size="S" />
      </HeaderContainer>
      <BodyContainer>
        <TextBlock>
          <TitleS>Sanduíche</TitleS>
          <Text>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
        </TextBlock>
        <TextBlock>
          <TitleXS>Data e hora</TitleXS>
          <Text>12/08/2022 às 16:00</Text>
        </TextBlock>
        <MealStatus>
          <MealStatusIcon type={type} />
          <MealStatusText>
            {type === 'positive' ? 'dentro' : 'fora'} da dieta
          </MealStatusText>
        </MealStatus>
        <ButtonBlock>
          <Button title="Editar Refeição" type="edit" />
          <Button title="Excluir Refeição" type="delete" />
        </ButtonBlock>
      </BodyContainer>
    </Container>
  )
}
