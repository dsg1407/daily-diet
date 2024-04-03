import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { Statistics } from '@/screens/Statistics'
import { NewMeal } from '@/screens/NewMeal'
import { Feedback } from '@/screens/Feedback'
import { MealDescription } from '@/screens/MealDescription'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDescription" component={MealDescription} />
    </Navigator>
  )
}
