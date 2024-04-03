import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import {
  useFocusEffect,
  useRoute,
  useNavigation,
} from '@react-navigation/native'

import { MealStorageDTO } from '@/storage/meal/MealStorageDTO'
import { mealsGetAll } from '@/storage/meal/mealsGetAll'
import { mealRemove } from '@/storage/meal/mealRemove'

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

import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'

type RouteParams = {
  id: string
}

export function MealDescription() {
  const [mealDescription, setMealDescription] = useState<MealStorageDTO>()

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchMealData() {
    const meals = await mealsGetAll()
    const mealInfo = meals.filter((meal) => meal.id === id)[0]

    setMealDescription(mealInfo)
  }

  async function mealDelete() {
    try {
      await mealRemove(id)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover refeição', 'Não foi possível remover a refeição.')
    }
  }

  function handleBackButton() {
    navigation.navigate('home')
  }

  function handleEditButton() {
    navigation.navigate('new', { mealRoute: 'edit', id })
  }

  function handleDeleteButton() {
    Alert.alert(
      'Deseja realmente excluir o registro da refeição ?',
      undefined,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim, excluir', onPress: () => mealDelete() },
      ]
    )
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealData()
    }, [])
  )

  return (
    <Container>
      <HeaderContainer type={mealDescription?.onDiet}>
        <BackButton onPress={handleBackButton}>
          <BackIcon />
        </BackButton>
        <Highlight title="Refeição" size="S" />
      </HeaderContainer>
      <BodyContainer>
        <TextBlock>
          <TitleS>{mealDescription?.name}</TitleS>
          <Text>{mealDescription?.description}</Text>
        </TextBlock>
        <TextBlock>
          <TitleXS>Data e hora</TitleXS>
          <Text>{`${mealDescription?.date.toLocaleDateString(
            'pt-BR'
          )} às ${mealDescription?.date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}`}</Text>
        </TextBlock>
        <MealStatus>
          <MealStatusIcon type={mealDescription?.onDiet} />
          <MealStatusText>
            {mealDescription?.onDiet === 'positive' ? 'dentro' : 'fora'} da
            dieta
          </MealStatusText>
        </MealStatus>
        <ButtonBlock>
          <Button
            title="Editar Refeição"
            type="edit"
            onPress={handleEditButton}
          />
          <Button
            title="Excluir Refeição"
            type="delete"
            onPress={handleDeleteButton}
          />
        </ButtonBlock>
      </BodyContainer>
    </Container>
  )
}
