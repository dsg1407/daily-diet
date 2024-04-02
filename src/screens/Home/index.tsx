import { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import {
  Container,
  ImageBlock,
  Logo,
  Profile,
  StatisticFrame,
  StatisticIcon,
  Title,
  MealSectionHeader,
} from './styles'

import { Button } from '@/components/Button'
import { Highlight } from '@/components/Highlight'
import { SectionMealItem } from '@/components/SectionMealItem'

import LogoImg from '@/assets/logo.png'
import ProfileImg from '@/assets/profile.png'

export type MealProps = {
  name: string
  description: string
  date: Date
  onDiet: 'positive' | 'negative'
}

type MealSectionItemProps = {
  title: string
  data: MealProps[]
}

const mealsRegistered = [
  {
    date: new Date(2022, 8, 12, 16, 0),
    description: 'Whey Protein com leite',
    name: 'Whey Protein com leite Whey Protein com leite Whey Protein com leite',
    onDiet: 'positive',
  },
  {
    date: new Date(2022, 8, 12, 20, 0),
    description: 'X-tudo com tudo dentro',
    name: 'X-tudo',
    onDiet: 'negative',
  },
  {
    date: new Date(2022, 8, 12, 12, 30),
    description: 'Salada cesar com frango',
    name: 'Salada cesar com frango',
    onDiet: 'positive',
  },
  {
    date: new Date(2022, 8, 11, 20, 0),
    description: 'X-tudo com tudo dentro',
    name: 'X-tudo',
    onDiet: 'positive',
  },
  {
    date: new Date(2022, 8, 11, 16, 0),
    description: 'Whey Protein com leite',
    name: 'Whey Protein com leite Whey Protein com leite Whey Protein com leite',
    onDiet: 'negative',
  },
  {
    date: new Date(2022, 8, 11, 12, 30),
    description: 'Salada cesar com frango',
    name: 'Salada cesar com frango',
    onDiet: 'positive',
  },
] as MealProps[]

export function Home() {
  const [mealsData, setMealsData] = useState<MealProps[]>([])
  const [mealsSection, setMealsSection] = useState<MealSectionItemProps[]>([])
  const [positiveMeals, setPositiveMeals] = useState(0)

  const navigation = useNavigation()

  const positiveIndex = 0.6

  async function fetchMealsData() {
    try {
      mealsRegistered.sort((a, b) => {
        return Number(b.date) - Number(a.date)
      })
      let sectionTitleArray = [] as string[]
      mealsRegistered.forEach(
        (meal) =>
          !sectionTitleArray.includes(meal.date.toLocaleDateString('pt-BR')) &&
          sectionTitleArray.push(meal.date.toLocaleDateString('pt-BR'))
      )

      const sectionItems = sectionTitleArray.map((title) => {
        return {
          title,
          data: mealsRegistered.filter(
            (meal) => meal.date.toLocaleDateString('pt-BR') === title
          ),
        }
      })

      setPositiveMeals(
        mealsRegistered.length === 0
          ? 0
          : mealsRegistered.filter((meal) => meal.onDiet === 'positive')
              .length / mealsRegistered.length
      )

      setMealsData(mealsRegistered)
      setMealsSection(sectionItems)
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
      console.log(error)
    }
  }

  function handleStatisticButton() {
    const totalMeals = mealsData.length
    const positiveMeals = mealsData.filter(
      (meal) => meal.onDiet === 'positive'
    ).length
    const sequence = mealsData
      .map((meal) => (meal.onDiet === 'positive' ? 1 : 0))
      .reduce(
        (acc, value, index) =>
          value === 0 ? [...acc, value] : [...acc, acc[index] + value],
        [0]
      )
      .reduce((acc, value) => (value > acc ? value : acc))

    navigation.navigate('statistics', {
      positiveMeals,
      totalMeals,
      sequence,
      positiveIndex,
    })
  }

  function handleCreateNewButton() {
    navigation.navigate('new')
  }

  function handleMealDescriptionButton(item: MealProps) {
    console.log('openMealDescriptionButton click', item)
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsData()
    }, [])
  )
  return (
    <Container>
      <ImageBlock>
        <Logo source={LogoImg} />
        <Profile source={ProfileImg} />
      </ImageBlock>

      <StatisticFrame
        type={positiveMeals >= positiveIndex ? 'positive' : 'negative'}
        onPress={handleStatisticButton}
      >
        <Highlight
          title={positiveMeals.toLocaleString('pt-BR', {
            style: 'percent',
            maximumFractionDigits: 2,
          })}
          size="G"
          subtitle={'das refeições dentro da dieta'}
        />
        <StatisticIcon
          type={positiveMeals >= positiveIndex ? 'positive' : 'negative'}
        />
      </StatisticFrame>

      <Title>Refeições</Title>
      <Button
        title="Nova refeição"
        type="add"
        onPress={handleCreateNewButton}
      />

      <SectionList
        sections={mealsSection}
        keyExtractor={(item) => `${item.date}-${item.name}`}
        renderItem={({ item }) => (
          <SectionMealItem
            time={item.date.toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
            mealName={item.name}
            onDiet={item.onDiet}
            onPress={() => handleMealDescriptionButton(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <MealSectionHeader>{title.replaceAll('/', '.')}</MealSectionHeader>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
