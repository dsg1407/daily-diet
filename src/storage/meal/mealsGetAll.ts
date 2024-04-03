import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@/storage/storageConfig'
import { MealStorageDTO } from './MealStorageDTO'

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    const mealsStored: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    const meals = mealsStored.map((meal) => {
      return {
        ...meal,
        date: new Date(meal.date),
      }
    })

    return meals
  } catch (error) {
    throw error
  }
}
