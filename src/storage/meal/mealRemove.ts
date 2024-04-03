import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@/storage/storageConfig'

import { mealsGetAll } from '@/storage/meal/mealsGetAll'

export async function mealRemove(id: string) {
  try {
    const storedMeals = await mealsGetAll()
    const meals = storedMeals.filter((meal) => meal.id !== id)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
  } catch (error) {
    throw error
  }
}
