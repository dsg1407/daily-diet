import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { randomUUID } from 'expo-crypto'

import { MealStorageDTO } from '@/storage/meal/MealStorageDTO'
import { mealCreate } from '@/storage/meal/mealCreate'
import { mealsGetAll } from '@/storage/meal/mealsGetAll'
import { mealEdit } from '@/storage/meal/mealEdit'

import {
  BackButton,
  BackIcon,
  BodyContainer,
  Container,
  DescriptionField,
  FormBlock,
  FormGroup,
  FormRow,
  HeaderContainer,
  InputField,
  Label,
} from './style'

import { AppError } from '@/utils/AppError'
import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'
import { Filter } from '@/components/Filter'

type RouteParams = {
  mealRoute: 'add' | 'edit'
  id?: string
}

export function NewMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [mealDate, setMealDate] = useState('')
  const [mealTime, setMealTime] = useState('')
  const [onDiet, setOnDiet] = useState<'positive' | 'negative'>()

  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState<'date' | 'time'>('date')

  const route = useRoute()
  const navigation = useNavigation()
  const { mealRoute, id } = route.params as RouteParams

  function handleConfirm(selectDate: Date) {
    setMealDate(selectDate.toLocaleDateString('pt-BR'))
    setMealTime(
      selectDate.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    )

    setDate(selectDate)
    setShow(false)
  }

  function dateInputFocus(mode: 'date' | 'time') {
    setMode(mode)
    setShow(true)
  }

  async function fetchMealData() {
    const meals = await mealsGetAll()
    const mealInfo = meals.filter((meal) => meal.id === id)[0]

    setName(mealInfo.name)
    setDescription(mealInfo.description)
    setDate(mealInfo.date)
    setMealDate(mealInfo.date.toLocaleDateString('pt-BR'))
    setMealTime(
      mealInfo.date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    )
    setOnDiet(mealInfo.onDiet)
  }

  async function handleSubmit() {
    if (
      !name.trim() ||
      !description.trim() ||
      !mealDate ||
      !mealTime ||
      !onDiet
    ) {
      Alert.alert(
        'Informações do prato',
        'Necessário cadastrar todos os campos.'
      )
      return
    }

    try {
      const newMeal = {
        id: mealRoute === 'add' ? randomUUID() : id,
        name: name.trim(),
        description: description.trim(),
        date,
        onDiet,
      } as MealStorageDTO

      if (mealRoute === 'add') {
        await mealCreate(newMeal)
        navigation.navigate('feedback', {
          type: onDiet as 'positive' | 'negative',
        })
      } else if (mealRoute === 'edit') {
        await mealEdit(newMeal)
        navigation.navigate('mealDescription', { id: id as string })
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Refeição', error.message)
      } else {
        Alert.alert(
          'Nova Refeição',
          'Não foi possível criar o cadastro da nova refeição.'
        )
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (mealRoute === 'edit') {
      fetchMealData()
    }
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => navigation.navigate('home')}>
          <BackIcon />
        </BackButton>
        <Highlight
          title={mealRoute === 'add' ? 'Nova refeição' : 'Editar refeição'}
          size="S"
        />
      </HeaderContainer>
      <BodyContainer>
        <FormBlock>
          <FormRow>
            <FormGroup>
              <Label>Nome</Label>
              <InputField value={name} onChangeText={(text) => setName(text)} />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Descrição</Label>
              <DescriptionField
                multiline
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Data</Label>
              <InputField
                value={mealDate}
                inputMode="none"
                onPressIn={() => dateInputFocus('date')}
              />
            </FormGroup>

            <FormGroup>
              <Label>Hora</Label>
              <InputField
                value={mealTime}
                inputMode="none"
                onPressIn={() => dateInputFocus('time')}
              />
            </FormGroup>
            <DateTimePicker
              isVisible={show}
              mode={mode}
              onConfirm={handleConfirm}
              onCancel={() => setShow(false)}
              maximumDate={new Date()}
              date={date}
            />
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Está dentro da dieta?</Label>
              <FormRow>
                <FormGroup>
                  <Filter
                    title="Sim"
                    type="Sim"
                    isActive={onDiet === 'positive'}
                    onPress={() => setOnDiet('positive')}
                  />
                </FormGroup>
                <FormGroup>
                  <Filter
                    title="Não"
                    type="Não"
                    isActive={onDiet === 'negative'}
                    onPress={() => setOnDiet('negative')}
                  />
                </FormGroup>
              </FormRow>
            </FormGroup>
          </FormRow>
        </FormBlock>

        <Button
          title={
            mealRoute === 'add' ? 'Cadastrar refeição' : 'Salvar alterações'
          }
          onPress={handleSubmit}
        />
      </BodyContainer>
    </Container>
  )
}
