import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from 'react-native-modal-datetime-picker'

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

import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'
import { Filter } from '@/components/Filter'

export function AddNewMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [mealDate, setMealDate] = useState('')
  const [mealTime, setMealTime] = useState('')
  const [onDiet, setOnDiet] = useState('')

  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState<'date' | 'time'>('date')

  const navigation = useNavigation()

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

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => navigation.navigate('home')}>
          <BackIcon />
        </BackButton>
        <Highlight title="Nova refeição" size="S" />
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
                    isActive={onDiet === 'Sim'}
                    onPress={() => setOnDiet('Sim')}
                  />
                </FormGroup>
                <FormGroup>
                  <Filter
                    title="Não"
                    type="Não"
                    isActive={onDiet === 'Não'}
                    onPress={() => setOnDiet('Não')}
                  />
                </FormGroup>
              </FormRow>
            </FormGroup>
          </FormRow>
        </FormBlock>

        <Button title="Cadastrar refeição" />
      </BodyContainer>
    </Container>
  )
}
