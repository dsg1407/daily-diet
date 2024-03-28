import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { Statistics } from '@/screens/Statistics'
import { AddNewMeal } from '@/screens/AddNewMeal'
import { Feedback } from '@/screens/Feedback'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={AddNewMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
