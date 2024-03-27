import { useState } from 'react'
import { SectionList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
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

type Meal = {
  name: string
  description: string
  date: string
  time: string
  onDiet: 'yes' | 'no'
}

type MealSectionItem = {
  title: string
  data: Meal[]
}
export function Home() {
  const [meals, setMeals] = useState<MealSectionItem[]>([
    {
      title: '12.08.22',
      data: [
        {
          date: '12.08.22',
          description: 'X-tudo com tudo dentro',
          name: 'X-tudo',
          onDiet: 'no',
          time: '20:00',
        },
        {
          date: '12.08.22',
          description: 'Whey Protein com leite',
          name: 'Whey Protein com leite Whey Protein com leite Whey Protein com leite',
          onDiet: 'yes',
          time: '16:00',
        },
        {
          date: '12.08.22',
          description: 'Salada cesar com frango',
          name: 'Salada cesar com frango',
          onDiet: 'yes',
          time: '12:30',
        },
      ],
    },
    {
      title: '11.08.22',
      data: [
        {
          date: '11.08.22',
          description: 'X-tudo com tudo dentro',
          name: 'X-tudo',
          onDiet: 'no',
          time: '20:00',
        },
        {
          date: '11.08.22',
          description: 'Whey Protein com leite',
          name: 'Whey Protein com leite',
          onDiet: 'yes',
          time: '16:00',
        },
        {
          date: '11.08.22',
          description: 'Salada cesar com frango',
          name: 'Salada cesar com frango',
          onDiet: 'yes',
          time: '12:30',
        },
      ],
    },
  ])

  const navigation = useNavigation()

  return (
    <Container>
      <ImageBlock>
        <Logo source={LogoImg} />
        <Profile source={ProfileImg} />
      </ImageBlock>

      <StatisticFrame
        type="positive"
        onPress={() => navigation.navigate('statistics')}
      >
        <Highlight
          title="90,86%"
          size="G"
          subtitle="das refeições dentro da dieta"
        />
        <StatisticIcon type="positive" />
      </StatisticFrame>

      <Title>Refeições</Title>
      <Button
        title="Nova refeição"
        type="add"
        onPress={() => navigation.navigate('new')}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item) => `${item.date}-${item.time}`}
        renderItem={({ item }) => (
          <SectionMealItem
            time={item.time}
            mealName={item.name}
            onDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <MealSectionHeader>{title}</MealSectionHeader>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
